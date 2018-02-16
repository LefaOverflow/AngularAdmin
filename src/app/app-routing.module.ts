import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockInventoryComponent } from './stock-inventory/stock-inventory.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'stockinventory',component: StockInventoryComponent},
  {path: 'home',component: DashboardComponent},
  {path: '', redirectTo:'/home',pathMatch:'full'},
  {path: '**' ,component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
