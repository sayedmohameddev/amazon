import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly _HttpClient = inject(HttpClient)
  constructor() { }

  // ============== >> Get all products 
  getAllProducts(): Observable<any> {
    return this._HttpClient.get(`${baseURL.baseURL}api/v1/products`)
  }


  // ============== >> Get Spicfice products 
  getSpecificProducts(Id: string): Observable<any> {
    return this._HttpClient.get(`${baseURL.baseURL}api/v1/products/${Id}`)
  }

}
