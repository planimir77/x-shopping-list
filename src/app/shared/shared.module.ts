import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { LoadingComponent } from './loading/loading.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    CapitalizePipe,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    CapitalizePipe,
    LoadingComponent
  ],
})
export class SharedModule { }
