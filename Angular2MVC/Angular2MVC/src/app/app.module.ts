import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UserManageComponent } from './components/user/usermanage.component';
import { ErrorComponent } from './components/error/error.component';
import { UserService } from './Service/user.service';
import { LoginService } from './Service/login.service';
import { AuthGuard } from './_guards/auth'
import { DonotPasteDirective } from './Shared/donotpaste.directive';
import { CanDeactivateGuard } from './_guards/can-component-deactivate.guard';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, HttpModule, routing, Ng2Bs3ModalModule],
    declarations: [
        AppComponent,
        UserComponent,
        HomeComponent,
        LoginComponent,
        UserManageComponent,
        DonotPasteDirective,
        ErrorComponent
    ],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, UserService, LoginService, AuthGuard, CanDeactivateGuard],
    bootstrap: [AppComponent]

})
export class AppModule { }
