import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Http } from '@angular/http';

import { BooksCartModel } from '../books-cart.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class RemotecallService {

  constructor(private _httpClient: HttpClient, private _http: Http) { }

  executeHttpClientGET(url: string) {
    return this._httpClient.get<Array<BooksCartModel.BooksDetails>>(url);
  }

  executeHttpGet(url: string): Observable<BooksCartModel.BooksDetails[]> {
    return this._http.get(url).map((response)=>{
      return response.json();
    })
  }

}
