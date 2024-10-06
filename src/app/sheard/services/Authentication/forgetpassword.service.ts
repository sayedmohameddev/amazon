import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from '../../environment/environment';


@Injectable({
  providedIn: 'root'
})
export class ForgetpasswordService {

  constructor() { }
  private readonly _HttpClient = inject(HttpClient)

  // ============== >> send Email Addres for chick it's found or not 
  sendEmail(Email: object): Observable<any> {
    return this._HttpClient.post(`${baseURL.baseURL}api/v1/auth/forgotPasswords`, Email)
  }

  // ============== >> send Verify code  for confirm with email  
  verifyCode(Code: object): Observable<any> {
    return this._HttpClient.post(`${baseURL.baseURL}api/v1/auth/verifyResetCode`, Code)
  }

  // ============== >> update password 
  resetPassword(Data: object): Observable<any> {
    return this._HttpClient.put(`${baseURL.baseURL}api/v1/auth/resetPassword`, Data)
  }






}
