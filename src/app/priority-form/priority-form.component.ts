import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { EmployeeService } from '../Services/employee.service';
import { CustomalertService } from '../Shared/customalert.service';
import { Employee } from '../Models/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-priority-form',
  templateUrl: './priority-form.component.html',
  styleUrls: ['./priority-form.component.scss']
})
export class PriorityFormComponent implements OnInit {
  constructor(private employeeService: EmployeeService,
    private customAlertService:CustomalertService,
    public dialogRef: MatDialogRef<PriorityFormComponent>,
    private route: ActivatedRoute,
    private router: Router) { 
       this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
    };
    }
  private _subscription: Subscription;
  ngOnInit() {
    this.employeeService.getPriorities();
  }
  onClear() {
    this.employeeService.form.reset();
    this.employeeService.ClearForm();
  }

  onSubmit() {
    if (this.employeeService.form.valid) {
      this.employeeService.insertUpdatePriorities(this.employeeService.form.value)
        .subscribe(
        result => {
          this.gotoList();
          this.onClose();
          this.customAlertService.successMessage('Submitted successfully');
        },
        error => console.error(error)
        );
    }
  }
  gotoList() {
      this.router.navigate(['/maintenance']);
  }
  onClose() {
    this.employeeService.form.reset();
    this.employeeService.ClearForm();
    this.dialogRef.close();
  }
}
