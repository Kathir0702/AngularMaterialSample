import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ParentTask } from '../Models/entities';
@Injectable({
  providedIn: 'root'
})
export class ParentTaskService {
  form: FormGroup = new FormGroup({
    ParentTaskId: new FormControl(''),
    ParentTaskName: new FormControl('', Validators.required),
    ParentTaskDeleteFlag: new FormControl('')
  });
  constructor(private httpClient: HttpClient) { }
  getParentTasks(): Observable<ParentTask[]> {
    return this.httpClient.get<ParentTask[]>('/api/ParentTask');
  }

  insertUpdateParentTasks(parentTask:ParentTask) {
    if (parentTask.ParentTaskId)
     return this.httpClient.put<ParentTask>('/api/ParentTask/' + parentTask.ParentTaskId, parentTask);
    else {
     return this.httpClient.post<ParentTask>('/api/ParentTask', parentTask);
    }
  }
    deleteParentTask(parentTask) {
    parentTask.ParentTaskDeleteFlag = 'Y';
    return this.httpClient.put<ParentTask>('/api/ParentTask/' + parentTask.parentTask, parentTask);
  }
   ClearForm() {
    this.form.setValue({
      ParentTaskId: '',
      ParentTaskName: '',
      ParentTaskDeleteFlag: ''
    });
  }
  SetFormValue(parentTask) {
    this.form.setValue(parentTask);
  }
}
