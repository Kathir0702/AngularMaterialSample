import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { StatusService } from '../../Services/status.service';
import { CustomalertService } from '../../Shared/customalert.service';
import { Status } from '../../Models/entities';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-statusform',
  templateUrl: './statusform.component.html',
  styleUrls: ['./statusform.component.scss']
})
export class StatusformComponent implements OnInit {
 constructor(private statusService: StatusService,
    private customAlertService:CustomalertService,
    public dialogRef: MatDialogRef<StatusformComponent>,
    private route: ActivatedRoute,
    private router: Router) { 
       this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
    };
    }
  ngOnInit() {
  }
  onClear() {
    this.statusService.form.reset();
    this.statusService.ClearForm();
  }

  onSubmit() {
    if (this.statusService.form.valid) {
      this.statusService.insertUpdateStatus(this.statusService.form.value)
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
    this.statusService.form.reset();
    this.statusService.ClearForm();
    this.dialogRef.close();
  }
}
