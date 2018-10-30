import { Component, OnInit, ViewChild } from '@angular/core';
import { ParentTaskService } from '../Services/parent-task.service';
import { CustomalertService } from '../Shared/customalert.service';
import { DataSource } from '@angular/cdk/collections';
import { ParentTask } from '../Models/entities';
import { ParenttaskformComponent } from './parenttaskform/parenttaskform.component';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
@Component({
  selector: 'app-parenttask',
  templateUrl: './parenttask.component.html',
  styleUrls: ['./parenttask.component.scss']
})
export class ParenttaskComponent implements OnInit {
  AppName = "Parent Task Details";
  ParentTaskList: MatTableDataSource<any>;
  displayedColumns: string[] = ['actions', 'ParentTaskName'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  constructor(private parentTaskService: ParentTaskService,
    private customAlertService: CustomalertService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.loadParentTaskList();
  }
  loadParentTaskList() {
    this.parentTaskService.getParentTasks().subscribe(data => {
      this.ParentTaskList = new MatTableDataSource(data);
      this.ParentTaskList.sort = this.sort;
      this.ParentTaskList.paginator = this.paginator;
      this.ParentTaskList.filterPredicate = (data, filter) => {
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
    this.ParentTaskList.filter = this.searchKey.trim().toLowerCase();
  }
  onCreate() {
    this.parentTaskService.ClearForm();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(ParenttaskformComponent, dialogConfig);
  }

  onEdit(row) {
    this.parentTaskService.SetFormValue(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(ParenttaskformComponent, dialogConfig);
  }
  onDelete(row) {
    if (confirm("are you sure want to delete this Parent Task?")) {
      this.parentTaskService.SetFormValue(row);
      this.parentTaskService.deleteParentTask(this.parentTaskService.form.value)
        .subscribe(
        result => {
          this.parentTaskService.ClearForm();
          this.loadParentTaskList();
          this.customAlertService.warningMessage("Deleted Successfully!");
        },
        error => console.error(error)
        );

    }

  }
}
