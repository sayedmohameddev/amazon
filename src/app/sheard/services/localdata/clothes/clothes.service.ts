import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _clothes from './../../../../../assets/localeData/clothBrand.json'
import { baseURL } from '../../../environment/environment';
@Injectable({
  providedIn: 'root'
})
export class ClothesService {

  constructor(private _httpclint: HttpClient) { }

  getAllClothes(): Observable<any> {
    return this._httpclint.get(`${baseURL.urlClothes}`)
  }
}
