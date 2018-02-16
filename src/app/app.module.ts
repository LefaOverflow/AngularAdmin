import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StockInventoryComponent } from './stock-inventory/stock-inventory.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpModule } from '@angular/http';
import { StockApiService } from './stock-api.service';

@NgModule({
  declarations: [
    AppComponent,
    StockInventoryComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpModule
  ],
  providers: [StockApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
