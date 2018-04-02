"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var user_component_1 = require("./components/user/user.component");
var home_component_1 = require("./components/home/home.component");
var login_component_1 = require("./components/login/login.component");
var auth_1 = require("./_guards/auth");
var appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [auth_1.AuthGuard] },
    { path: 'home', component: home_component_1.HomeComponent, canActivate: [auth_1.AuthGuard] },
    { path: 'user', component: user_component_1.UserComponent, canActivate: [auth_1.AuthGuard] }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map