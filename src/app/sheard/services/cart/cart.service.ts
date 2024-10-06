import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { baseURL } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartNumber: WritableSignal<number> = signal(0)


  constructor() { }
  private readonly _HttpClient = inject(HttpClient)


  addToCart(Id: string): Observable<any> {
    return this._HttpClient.post(`${baseURL.baseURL}api/v1/cart`, { "productId": Id })

  }

  updateCartQuantity(Id: string, count: number): Observable<any> {
    return this._HttpClient.put(`${baseURL.baseURL}api/v1/cart/${Id}`, { "count": count })
  }

  getAllproductInCart(): Observable<any> {
    return this._HttpClient.get(`${baseURL.baseURL}api/v1/cart`)
  }

  removeSpicficeProduct(Id: string): Observable<any> {
    return this._HttpClient.delete(`${baseURL.baseURL}api/v1/cart/${Id}`)
  }

  deleteUserCart(): Observable<any> {
    return this._HttpClient.delete(`${baseURL.baseURL}api/v1/cart`)
  }


}
