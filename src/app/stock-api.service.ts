import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StockApiService {

  stockUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _http : Http) { }

  getStock(){
      return this._http.get(this.stockUrl).map(res => res.json());
  }

}


