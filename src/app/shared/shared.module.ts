import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { LoadingComponent } from './loading/loading.component';
import { MaterialModule } from '../material/material.module';
import { EndWithSPipe } from './pipes/end-with-s.pipe';
import { TwoRowsPipe } from './pipes/two-rows.pipe';



@NgModule({
  declarations: [
    CapitalizePipe,
    LoadingComponent,
    EndWithSPipe,
    TwoRowsPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    CapitalizePipe,
    LoadingComponent,
    EndWithSPipe,
    TwoRowsPipe
  ],
})
export class SharedModule { }
