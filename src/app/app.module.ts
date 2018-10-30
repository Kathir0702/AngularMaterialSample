import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
//import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { LeaveDetailsComponent } from './leave-details/leave-details.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { PriorityFormComponent } from './priority-form/priority-form.component';
import { ParenttaskComponent } from './parenttask/parenttask.component';
import { ParenttaskformComponent } from './parenttask/parenttaskform/parenttaskform.component';
import { StatusComponent } from './status/status.component';
import { StatusformComponent } from './status/statusform/statusform.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LeaveDetailsComponent,
    EmployeeDetailsComponent,
    TaskDetailsComponent,
    ProjectDetailsComponent,
    TicketDetailsComponent,
    PriorityFormComponent,
    ParenttaskComponent,
    ParenttaskformComponent,
    StatusComponent,
    StatusformComponent,
    MaintenanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
     FormsModule,
     ReactiveFormsModule,  
    HttpClientModule
  ],
  providers: [],
  entryComponents: [
        PriorityFormComponent,
        ParenttaskformComponent,
        StatusformComponent
    ],
  bootstrap: [AppComponent]

})
export class AppModule { }
