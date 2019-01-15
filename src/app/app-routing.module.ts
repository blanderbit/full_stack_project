import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthRegisterComponent} from './auth-component/auth-register/auth-register.component';
import {AuthSocialComponent} from './auth-component/auth-social/auth-social.component';
import {AuthLoginComponent} from './auth-component/auth-login/auth-login.component';
import {NotFoundComponent} from './not-found/not-found.component';

export const RoutingComponents = [
    NotFoundComponent
];

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'not-found', component: NotFoundComponent},
    // {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
