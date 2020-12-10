import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from '../material/material.module'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { ValidateEqualModule } from 'ng-validate-equal';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ValidateEqualModule,
    SharedModule
  ]
})
export class UserModule { }
