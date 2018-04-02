import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './_guards/auth'

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard]},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'user', component: UserComponent, canActivate: [AuthGuard] }
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);