import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemAddComponent } from './item-add-component/item-add.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from "@angular/forms";
import { ItemListComponent } from './item-list-component/item-list.component';
import { ItemComponent } from './item/item.component';



@NgModule({
  declarations: [
    ItemAddComponent, 
    ItemListComponent, 
    ItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    ItemAddComponent,
    ItemListComponent,
    ItemComponent,
  ]
})
export class ItemModule { }
