import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Status } from '../Models/entities';
@Injectable({
  providedIn: 'root'
})
export class StatusService {
  form: FormGroup = new FormGroup({
    StatusId: new FormControl(''),
    StatusCode: new FormControl('', Validators.required),
    StatusName: new FormControl('', Validators.required),
    StatusDeleteFlag: new FormControl('')
  });
  constructor(private httpClient: HttpClient) { }
  getStatusDetails(): Observable<Status[]> {
    return this.httpClient.get<Status[]>('/api/StatusDetails');
  }
  insertUpdateStatus(statusDetails: Status) {
    if (statusDetails.StatusId)
      return this.httpClient.put<Status>('/api/StatusDetails/' + statusDetails.StatusId, statusDetails);
    else {
      return this.httpClient.post<Status>('/api/StatusDetails', statusDetails);
    }
  }
  deleteStatus(statusDetails) {
    statusDetails.StatusDeleteFlag = 'Y';
    return this.httpClient.put<Status>('/api/StatusDetails/' + statusDetails.StatusId, statusDetails);
  }
  ClearForm() {
    this.form.setValue({
      StatusId: '',
      StatusCode: '',
      StatusName: '',
      StatusDeleteFlag: ''
    });
  }
  SetFormValue(statusDetails) {
    this.form.setValue(statusDetails);
  }
}
