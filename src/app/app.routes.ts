import { Routes } from '@angular/router';
import {RegisterComponent} from './auth/register/register.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {LoginComponent} from './auth/login/login.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: LandingPageComponent }
];
