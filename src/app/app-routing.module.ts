import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppinglistCreateComponent } from './shoppinglist/shoppinglist-create/shoppinglist-create.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'shopping-list-create', component: ShoppinglistCreateComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
