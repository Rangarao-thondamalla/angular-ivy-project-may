import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn:'root'
})

export class ContactformService {
  _url = 'https://5df7ba4a4fdcb20014a483cc.mockapi.io/Register';
  constructor( private _http:HttpClient){ }
  register(user : User){
    return this._http.post<any>(this._url, user);
  }
}
