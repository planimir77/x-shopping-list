import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  ShoppinglistCreateComponent } from './create-component/shoppinglist-create.component';
import { ShoppinglistDashboardComponent } from './dashboard-component/shoppinglist-dashboard.component';
import { ShoppinglistDetailsComponent } from './details-component/shoppinglist-details.component';

const routes: Routes = [
  { path: 'create', component: ShoppinglistCreateComponent, data: {isLogged: true,}},
  { path: 'dashboard', component: ShoppinglistDashboardComponent, data: {isLogged: true,}},
  { path: ':id', component: ShoppinglistDetailsComponent, data: {isLogged: false,}},
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppinglistRoutingModule { }
