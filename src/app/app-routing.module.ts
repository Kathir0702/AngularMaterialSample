import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaveDetailsComponent } from './leave-details/leave-details.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

const routes: Routes = [
  { path: '', component: MaintenanceComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'projectdetails', component: ProjectDetailsComponent },
  { path: 'ticketdetails', component: TicketDetailsComponent },
  { path: 'taskdetails', component: TaskDetailsComponent },
  { path: 'leavedetails', component: LeaveDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
