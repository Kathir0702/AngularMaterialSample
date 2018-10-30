import { Component, OnInit, ViewChild } from '@angular/core';
import { StatusService } from '../Services/status.service';
import { CustomalertService } from '../Shared/customalert.service';
import { DataSource } from '@angular/cdk/collections';
import { Status } from '../Models/entities';
import { StatusformComponent } from './statusform/statusform.component';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  AppName = "Status Details";
  StatusList: MatTableDataSource<any>;
  displayedColumns: string[] = ['actions', 'StatusCode', 'StatusName'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  constructor(private statusService: StatusService,
    private customAlertService: CustomalertService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.loadStatusList();
  }
  loadStatusList() {
    this.statusService.getStatusDetails().subscribe(data => {
      this.StatusList = new MatTableDataSource(data);
      this.StatusList.sort = this.sort;
      this.StatusList.paginator = this.paginator;
      this.StatusList.filterPredicate = (data, filter) => {
        return this.displayedColumns.some(ele => {
          return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
        });
      };
    });
  }
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.StatusList.filter = this.searchKey.trim().toLowerCase();
  }
  onCreate() {
    this.statusService.ClearForm();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(StatusformComponent, dialogConfig);
  }

  onEdit(row) {
    this.statusService.SetFormValue(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(StatusformComponent, dialogConfig);
  }
  onDelete(row) {
    if (confirm("are you sure want to delete this status?")) {
      this.statusService.SetFormValue(row);
      this.statusService.deleteStatus(this.statusService.form.value)
        .subscribe(
        result => {
          this.statusService.ClearForm();
          this.loadStatusList();
          this.customAlertService.warningMessage("Deleted Successfully!");
        },
        error => console.error(error)
        );
    }
  }
}

