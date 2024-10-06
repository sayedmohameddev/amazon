import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor() { }
  private _HttpClient = inject(HttpClient)
  private _Router = inject(Router)
  userData: any


  // ============== >> send Regsiter data
  setRegisterForm(Data: object): Observable<any> {
    return this._HttpClient.post(`${baseURL.baseURL}api/v1/auth/signup`, Data)
  }

  // ============== >> send Regsiter data
  setloginForm(data: object): Observable<any> {
    return this._HttpClient.post(`${baseURL.baseURL}api/v1/auth/signin`, data)
  }

  // ============== >> d-Code token
  JWT(): void {
    if (typeof localStorage != "undefined") {
      if (localStorage.getItem("userToken") !== null) {
        this.userData = jwtDecode(localStorage.getItem("userToken")!)
      }
    }
  }



  logOut() {

    if (typeof localStorage !== "undefined") {
      localStorage.removeItem("userToken");
      this.userData = null;
      this._Router.navigate(["/login"]);
    }
  }


}
