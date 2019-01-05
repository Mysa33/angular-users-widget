import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  public url:string;
  
  constructor(private _http:HttpClient) { }

  getData(url){
    return this._http.get(url);
  }

}

