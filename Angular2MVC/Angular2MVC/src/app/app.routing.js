"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var user_component_1 = require("./components/user/user.component");
var usermanage_component_1 = require("./components/user/usermanage.component");
var home_component_1 = require("./components/home/home.component");
var login_component_1 = require("./components/login/login.component");
var error_component_1 = require("./components/error/error.component");
var auth_1 = require("./_guards/auth");
var can_component_deactivate_guard_1 = require("./_guards/can-component-deactivate.guard");
var appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [auth_1.AuthGuard] },
    { path: 'home', component: home_component_1.HomeComponent, canActivate: [auth_1.AuthGuard] },
    { path: 'user', component: user_component_1.UserComponent, canActivate: [auth_1.AuthGuard], canDeactivate: [can_component_deactivate_guard_1.CanDeactivateGuard] },
    { path: 'user/:id', component: usermanage_component_1.UserManageComponent, canActivate: [auth_1.AuthGuard] },
    { path: '**', component: error_component_1.ErrorComponent, data: { message: 'Page not found.' } }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map