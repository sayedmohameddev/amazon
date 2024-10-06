import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as categoriesoffers from './../../../../../assets/localeData/categoriesOffers.json'
import { baseURL } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesoffersService {

  _categoriesoffers: any = categoriesoffers
  private readonly _HttpClient = inject(HttpClient)

  getallCategoriseOffers(): Observable<any> {
    return this._HttpClient.get(`${baseURL.urlcategoriesoffers}`)
  }
}
