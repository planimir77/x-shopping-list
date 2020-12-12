import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemAddComponent } from './item-add-component/item-add.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [ItemAddComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [ItemAddComponent]
})
export class ItemModule { }
