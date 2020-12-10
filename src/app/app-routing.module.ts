import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      { 
        path: 'home', 
        component: HomeComponent },
      { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' },
      { 
        path: 'shoppinglist', 
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./shoppinglist/shoppinglist.module').then(m => m.ShoppinglistModule) },
      { 
        path: 'user', 
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
    ]
  }
 ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
