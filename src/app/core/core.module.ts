import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShoppinglistService, AuthService } from './services';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    
  ],
  providers: [
    ShoppinglistService,
    AuthService
  ]
})
export class CoreModule { }
