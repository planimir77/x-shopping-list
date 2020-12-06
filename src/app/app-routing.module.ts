import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'shoppinglist', loadChildren: () => import('./shoppinglist/shoppinglist.module').then(m => m.ShoppinglistModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
