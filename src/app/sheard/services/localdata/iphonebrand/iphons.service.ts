import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import * as iphone from './../../../../../assets/localeData/iphone.json'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IphonsService {

  private readonly _HttpClient = inject(HttpClient)

  getallIphone(): Observable<any> {
    return this._HttpClient.get("./../../../../../assets/localeData/iphone.json")
  }
}
