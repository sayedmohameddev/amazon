import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  private readonly _HttpClient = inject(HttpClient)
  constructor() { }

  // ============== >> Get all brands 
  getAllBrands(): Observable<any> {
    return this._HttpClient.get(`${baseURL.baseURL}api/v1/brands?limit=20`)
  }

  // ============== >> Get specific brands 
  gerSpecificBrand(id: string): Observable<any> {
    return this._HttpClient.get(`${baseURL.baseURL}api/v1/brands/${id}`)
  }
}
