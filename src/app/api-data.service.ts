import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { data } from './data';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private _HttpClient:HttpClient) { }
  getData():Observable<any>
  {
    return this._HttpClient.get('https://fakestoreapi.com/products')
  }
}
