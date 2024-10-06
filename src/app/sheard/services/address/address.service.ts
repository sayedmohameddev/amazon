import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private readonly _HttpClient = inject(HttpClient)


  addAddres(data: object): Observable<any> {
    return this._HttpClient.post(`${baseURL.baseURL}api/v1/addresses`, data)
  }


  Getloggeduseraddresses(): Observable<any> {

    return this._HttpClient.get(`${baseURL.baseURL}api/v1/addresses`)
  }

}
