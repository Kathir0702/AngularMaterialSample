import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';
import { CustomalertService } from '../Shared/customalert.service';
import { DataSource } from '@angular/cdk/collections';
import { Employee } from '../Models/employee';
import { PriorityFormComponent } from '../priority-form/priority-form.component';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  AppName = "Priority Details";
  EmployeeList: MatTableDataSource<any>;
  displayedColumns: string[] = ['actions', 'PriorityName'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  constructor(private employeeService: EmployeeService,
    private customAlertService: CustomalertService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.loadPriorities();
  }
  loadPriorities() {
    this.employeeService.getPriorities().subscribe(data => {
      console.log(data);
      this.EmployeeList = new MatTableDataSource(data);
      this.EmployeeList.sort = this.sort;
      this.EmployeeList.paginator = this.paginator;
      this.EmployeeList.filterPredicate = (data, filter) => {
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
    this.EmployeeList.filter = this.searchKey.trim().toLowerCase();
  }
  onCreate() {
    this.employeeService.ClearForm();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(PriorityFormComponent, dialogConfig);
  }

  onEdit(row) {
    this.employeeService.SetFormValue(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(PriorityFormComponent, dialogConfig);
  }
  onDelete(row) {
    if (confirm("are you sure want to delete this Priority?")) {
      this.employeeService.SetFormValue(row);
      this.employeeService.deletePriority(this.employeeService.form.value)
        .subscribe(
        result => {
          this.employeeService.ClearForm();
          this.loadPriorities();
          this.customAlertService.warningMessage("Deleted Successfully!");
        },
        error => console.error(error)
        );

    }

  }
}
