import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})

export class ContactformService {
  _url = 'https://httpbin.org/anything';

  constructor( private _http:HttpClient){ }

  register(userData){
    return this._http.post<any>(this._url,userData );
  }

}
