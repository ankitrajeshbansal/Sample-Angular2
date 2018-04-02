"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var login_service_1 = require("../../Service/login.service");
var global_1 = require("../../Shared/global");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, _loginService, _router) {
        this.fb = fb;
        this._loginService = _loginService;
        this._router = _router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        localStorage.clear();
        this.userFrm = this.fb.group({
            UserName: ['', forms_1.Validators.required],
            Password: ['', forms_1.Validators.required]
        });
    };
    LoginComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.msg = "";
        this._loginService.post(global_1.Global.USER_LOGIN_ENDPOINT, formData._value).subscribe(function (data) {
            if (data == 1) {
                localStorage.setItem('currentUser', 'true');
                _this.msg = "Data successfully added.";
                _this._router.navigate(["home"]);
            }
            else {
                localStorage.clear();
                _this.msg = "Username or password doesn't match.";
            }
        }, function (error) {
            _this.msg = error;
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            templateUrl: 'src/app/Components/login/login.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, login_service_1.LoginService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map