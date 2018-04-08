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
var user_service_1 = require("../../Service/user.service");
var forms_1 = require("@angular/forms");
var enum_1 = require("../../Shared/enum");
var global_1 = require("../../Shared/global");
var UserComponent = /** @class */ (function () {
    function UserComponent(fb, _userService) {
        this.fb = fb;
        this._userService = _userService;
        this.indLoading = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.vmuser = { User: null, dbops: null };
        this.LoadUsers();
    };
    UserComponent.prototype.LoadUsers = function () {
        var _this = this;
        this.indLoading = true;
        this._userService.get(global_1.Global.BASE_USER_ENDPOINT)
            .subscribe(function (users) { _this.users = users; _this.indLoading = false; }, function (error) { return _this.msg = error; });
    };
    UserComponent.prototype.addUser = function () {
        console.log(this.header.nativeElement.textContent);
        this.vmuser.dbops = null;
        this.vmuser.dbops = enum_1.DBOperation.create;
    };
    UserComponent.prototype.editUser = function (id) {
        this.vmuser.dbops = null;
        this.vmuser.dbops = enum_1.DBOperation.update;
        this.vmuser.User = this.users.filter(function (x) { return x.Id == id; })[0];
    };
    UserComponent.prototype.deleteUser = function (id) {
        this.vmuser.dbops = null;
        this.vmuser.dbops = enum_1.DBOperation.delete;
        this.vmuser.User = this.users.filter(function (x) { return x.Id == id; })[0];
    };
    UserComponent.prototype.loadUserChanged = function () {
        this.LoadUsers();
    };
    __decorate([
        core_1.ViewChild('testHeader'),
        __metadata("design:type", core_1.ElementRef)
    ], UserComponent.prototype, "header", void 0);
    UserComponent = __decorate([
        core_1.Component({
            templateUrl: 'src/app/Components/user/user.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, user_service_1.UserService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map