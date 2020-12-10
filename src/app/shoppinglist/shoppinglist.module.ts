import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ShoppinglistRoutingModule } from './shoppinglist-routing.module';
import { MaterialModule } from '../material/material.module'
import { ShoppinglistCreateComponent } from './create-component/shoppinglist-create.component';
import { ShoppinglistDetailsComponent } from './details-component/shoppinglist-details.component';
import { SharedModule } from '../shared/shared.module';


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
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShoppinglistModule { }
