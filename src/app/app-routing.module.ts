import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    //home path, put nothing inside it
    path: 'home',
    component: HomeComponent
  },
{
    //:id called route parameter
  path: 'login',
  component: LoginComponent
},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }