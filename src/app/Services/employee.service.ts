import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Employee } from '../Models/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  form: FormGroup = new FormGroup({
    PriorityId: new FormControl(''),
    PriorityName: new FormControl('', Validators.required),
    PriorityDeleteFlag: new FormControl('')
  });
  constructor(private httpClient: HttpClient) { }
  getPriorities(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('/api/priorities');
  }

  insertUpdatePriorities(priority:Employee) {
    console.log(priority);
    if (priority.PriorityId)
     return this.httpClient.put<Employee>('/api/priorities/' + priority.PriorityId, priority);
    else {
      console.log(priority.PriorityName);
     return this.httpClient.post<Employee>('/api/priorities', priority);
    }
  }

  deletePriority(priority) {
    priority.PriorityDeleteFlag = 'Y';
    return this.httpClient.put<Employee>('/api/priorities/' + priority.PriorityId, priority);
  }
  ClearForm() {
    this.form.setValue({
      PriorityId: '',
      PriorityName: '',
      PriorityDeleteFlag: ''
    });
  }
  SetFormValue(priority) {
    this.form.setValue(priority);
  }

}
