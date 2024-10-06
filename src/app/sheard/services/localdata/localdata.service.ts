import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL } from '../../environment/environment';
import * as schoolOffersData from './../../../../assets/localeData/localData.json'

@Injectable({
  providedIn: 'root'
})
export class LocaldataService {

  _schoolOffersData: any = schoolOffersData;


  constructor(private _HttpClient: HttpClient) { }

  getschoolOffersData(): Observable<any> {
    return this._HttpClient.get(`${baseURL.urlLocalData}`)
  }

  getImagesHomeSlider(): Observable<any> {
    return this._HttpClient.get(`${baseURL.urlLocalData}`)
  }

  getsliderCategoriesLogo(): Observable<any> {
    return this._HttpClient.get(`${baseURL.urlLocalData}`)
  }
}
