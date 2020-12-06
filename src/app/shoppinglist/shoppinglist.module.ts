import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ShoppinglistRoutingModule } from './shoppinglist-routing.module';
import { MaterialModule } from '../material/material.module'
import { ShoppinglistCreateComponent } from './create-component/shoppinglist-create.component';
import { ShoppinglistDetailsComponent } from './details-component/shoppinglist-details.component';


@NgModule({
  declarations: [
    ShoppinglistCreateComponent,
    ShoppinglistDetailsComponent
  ],
  imports: [
    CommonModule,
    ShoppinglistRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class ShoppinglistModule { }
