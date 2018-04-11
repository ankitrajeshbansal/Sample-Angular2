import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "user-app",
    template: `
                <div>
                    <nav class='navbar navbar-inverse'>
                        <div class='container-fluid'>
                            <ul class='nav navbar-nav'>
                                <li><a [routerLink]="['']" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a></li>
                                <li><a [routerLink]="['/user']" routerLinkActive="active">Users Management</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div class='container'>
                        <router-outlet></router-outlet>
                    </div>
                 </div>
                <button [routerLink]="['/login']" routerLinkActive="hide"> Logout</button>
                `,
    styles: ['.active{ color:white !important}','.hide{display:none}']
})

export class AppComponent {

    constructor(private router: Router) { }

    //for manually
    onLogout() {
        this.router.navigate(['/login']);
    }
}