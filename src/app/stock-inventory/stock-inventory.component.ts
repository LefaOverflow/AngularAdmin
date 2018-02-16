import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import {StockApiService} from '../stock-api.service';

import 'rxjs/add/operator/map';
@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.css']
})
export class StockInventoryComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  persons;
  stocks;

  dtTrigger: Subject<any> = new Subject();

  constructor(private http: Http, private stockService: StockApiService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.stockService.getStock().subscribe(response => {
      this.stocks = response;
      this.dtTrigger.next();
    });
      
  }

}
