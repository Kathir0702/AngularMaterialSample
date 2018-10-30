import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ParentTaskService } from '../../Services/parent-task.service';
import { CustomalertService } from '../../Shared/customalert.service';
import { ParentTask } from '../../Models/entities';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-parenttaskform',
  templateUrl: './parenttaskform.component.html',
  styleUrls: ['./parenttaskform.component.scss']
})
export class ParenttaskformComponent implements OnInit {
  constructor(private parentTaskService: ParentTaskService,
    private customAlertService:CustomalertService,
    public dialogRef: MatDialogRef<ParenttaskformComponent>,
    private route: ActivatedRoute,
    private router: Router) { 
       this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
    };
    }
  private _subscription: Subscription;
  ngOnInit() {
  }
  onClear() {
    this.parentTaskService.form.reset();
    this.parentTaskService.ClearForm();
  }

  onSubmit() {
    if (this.parentTaskService.form.valid) {
      this.parentTaskService.insertUpdateParentTasks(this.parentTaskService.form.value)
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
      this.router.navigate(['/taskdetails']);
  }
  onClose() {
    this.parentTaskService.form.reset();
    this.parentTaskService.ClearForm();
    this.dialogRef.close();
  }
}
