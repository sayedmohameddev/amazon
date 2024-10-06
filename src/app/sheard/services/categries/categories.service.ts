import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from '../../environment/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private readonly _HttpClient = inject(HttpClient)
  constructor() { }

  // ============== >> Get all products 
  getAllCategries(): Observable<any> {
    return this._HttpClient.get(`${baseURL.baseURL}api/v1/categories`)
  }

  // ============== >> Get specific  products 
  getSpecificCategries(id: string): Observable<any> {
    return this._HttpClient.get(`${baseURL.baseURL}api/v1/products/${id}`)
  }

  // ============== >> Get All Sub Categories 
  getAllSubCategories(): Observable<any> {
    return this._HttpClient.get(`${baseURL.baseURL}api/v1/subcategories`)
  }

  // ============== >> Get specific Sub Category 
  GetspecificSubCategory(id: string): Observable<any> {
    return this._HttpClient.get(`${baseURL.baseURL}api/v1/subcategories/${id}`)
  }

  // ============== >> GetAll Sub Categories On Category
  GetAllSubCategoriesOnCategory(id: string): Observable<any> {
    return this._HttpClient.get(`${baseURL.baseURL}api/v1/categories/${id}/subcategories`)
  }

}
