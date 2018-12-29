import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponentComponent} from './auth-component.component';
import {AuthLoginComponent} from './auth-login/auth-login.component';
import {AuthRegisterComponent} from './auth-register/auth-register.component';
import {AuthSocialComponent} from './auth-social/auth-social.component';

export const RoutingComponents = [
    AuthLoginComponent,
    AuthRegisterComponent,
    AuthSocialComponent
];

const routes: Routes = [
    {path: 'login', component: AuthLoginComponent},
    {path: 'register', component: AuthRegisterComponent},
    {path: 'socialize/:status/:token/:password/:email/:type', component: AuthSocialComponent},
    {path: 'socialize/:status/:message_error', component: AuthSocialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
