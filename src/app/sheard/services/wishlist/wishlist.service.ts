import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, Signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private readonly _HttpClient = inject(HttpClient)

  _countWishlist: WritableSignal<number> = signal(0)


  Addproducttowishlist(id: string): Observable<any> {
    return this._HttpClient.post(`${baseURL.baseURL}api/v1/wishlist`, { "productId": id })
  }

  Removeproductfromwishlist(id: string): Observable<any> {
    return this._HttpClient.delete(`${baseURL.baseURL}api/v1/wishlist/${id}`)
  }

  Getloggeduserwishlist(): Observable<any> {
    return this._HttpClient.get(`${baseURL.baseURL}api/v1/wishlist`)
  }
}
