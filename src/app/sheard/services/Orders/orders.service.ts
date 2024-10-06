import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }
  private readonly _HttpClient = inject(HttpClient)


  myheadr: any = { token: localStorage.getItem("userToken") }

  Checkoutsession(id: string, userData: object): Observable<any> {
    return this._HttpClient.post(`${baseURL.baseURL}api/v1/orders/checkout-session/${id}?url=${baseURL.hostURTL}`,
      { "shippingAddress": userData }
    )
  }
}

