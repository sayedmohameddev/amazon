import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import * as perfumes from './../../../../../assets/localeData/perfums.json'
import { Observable } from 'rxjs';
import { baseURL } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class RecommendproductsService {


  private readonly _HttpClient = inject(HttpClient)

  getRecommendeProduct(): Observable<any> {
    return this._HttpClient.get(`${baseURL.urlperfumes}`)
  }
}
