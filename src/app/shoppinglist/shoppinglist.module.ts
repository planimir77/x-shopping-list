import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ShoppinglistRoutingModule } from './shoppinglist-routing.module';
import { MaterialModule } from '../material/material.module'
import { ShoppinglistCreateComponent } from './create-component/shoppinglist-create.component';
import { ShoppinglistDetailsComponent } from './details-component/shoppinglist-details.component';
import { SharedModule } from '../shared/shared.module';
import { ItemModule } from '../item/item.module';
import { ShoppinglistDashboardComponent } from './dashboard-component/shoppinglist-dashboard.component';


@NgModule({
  declarations: [
    ShoppinglistCreateComponent,
    ShoppinglistDetailsComponent,
    ShoppinglistDashboardComponent,
  ],
  imports: [
    CommonModule,
    ShoppinglistRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    ItemModule
  ],
})
export class ShoppinglistModule { }
