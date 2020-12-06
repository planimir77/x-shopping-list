import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {  ShoppinglistCreateComponent } from './create-component/shoppinglist-create.component';
import { ShoppinglistDetailsComponent } from './details-component/shoppinglist-details.component';

const routes: Routes = [
  { path: 'create', component: ShoppinglistCreateComponent },
  { path: 'details', component: ShoppinglistDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppinglistRoutingModule { }
