import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { LoadingComponent } from './loading/loading.component';
import { MaterialModule } from '../material/material.module';
import { EndWithSPipe } from './pipes/end-with-s.pipe';



@NgModule({
  declarations: [
    CapitalizePipe,
    LoadingComponent,
    EndWithSPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    CapitalizePipe,
    LoadingComponent,
    EndWithSPipe
  ],
})
export class SharedModule { }
