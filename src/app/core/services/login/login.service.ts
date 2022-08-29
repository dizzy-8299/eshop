import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpService: HttpService) {}

  registerUser(data: any) {
    console.log(data);
    return this.httpService.postData('users', data);
  }

  authLogin(data: any) {
    const params = new HttpParams()
      .set('emailId', data.email)
      .set('password', data.password);
    return this.httpService.getData('users', params);
  }
}
