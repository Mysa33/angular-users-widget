import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  public URL:string;
  
  constructor(private _http:HttpClient) { }

  getData(URL){
    return this._http.get(URL);
  }

}

