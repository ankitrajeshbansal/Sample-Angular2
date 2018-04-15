import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';

import { AuthGuard } from './_guards/auth'
import { CanDeactivateGuard } from './_guards/can-component-deactivate.guard'

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard]},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'user', component: UserComponent, canActivate: [AuthGuard], canDeactivate: [CanDeactivateGuard] },
    { path: '**', component: ErrorComponent, data: { message: 'Page not found.'} }
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);