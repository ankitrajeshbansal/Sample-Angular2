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
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var enum_1 = require("../../Shared/enum");
var global_1 = require("../../Shared/global");
var UserManageComponent = /** @class */ (function () {
    function UserManageComponent(fb, _userService, differs) {
        this.fb = fb;
        this._userService = _userService;
        this.differs = differs;
        this.onLoadUserChanged = new core_1.EventEmitter();
        this.differ = differs.find({}).create(null);
    }
    UserManageComponent.prototype.ngOnInit = function () {
        this.userFrm = this.fb.group({
            Id: [''],
            FirstName: ['', forms_1.Validators.required],
            LastName: [''],
            Gender: ['', forms_1.Validators.required]
        });
    };
    UserManageComponent.prototype.ngDoCheck = function () {
        var changes = this.differ.diff(this.vmuser);
        if (changes) {
            switch (this.vmuser.dbops) {
                case enum_1.DBOperation.create:
                    this.SetControlsState(true);
                    this.modalTitle = "Add New User";
                    this.modalBtnTitle = "Add";
                    this.userFrm.reset();
                    this.modal.open();
                    break;
                case enum_1.DBOperation.update:
                    this.SetControlsState(true);
                    this.modalTitle = "Edit User";
                    this.modalBtnTitle = "Update";
                    this.userFrm.setValue(this.vmuser.User);
                    this.modal.open();
                    break;
                case enum_1.DBOperation.delete:
                    this.SetControlsState(false);
                    this.modalTitle = "Confirm to Delete?";
                    this.modalBtnTitle = "Delete";
                    this.userFrm.setValue(this.vmuser.User);
                    this.modal.open();
                    break;
            }
        }
        else {
            console.log('nothing changed');
        }
    };
    UserManageComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.msg = "";
        console.log(this.header.nativeElement.textContent);
        switch (this.vmuser.dbops) {
            case enum_1.DBOperation.create:
                this._userService.post(global_1.Global.BASE_USER_ENDPOINT, formData._value).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully added.";
                        _this.onLoadUserChanged.emit();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                    }
                    _this.modal.dismiss();
                }, function (error) {
                    _this.msg = error;
                });
                break;
            case enum_1.DBOperation.update:
                this._userService.put(global_1.Global.BASE_USER_ENDPOINT, formData._value.Id, formData._value).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully updated.";
                        _this.onLoadUserChanged.emit();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                    }
                    _this.modal.dismiss();
                }, function (error) {
                    _this.msg = error;
                });
                break;
            case enum_1.DBOperation.delete:
                this._userService.delete(global_1.Global.BASE_USER_ENDPOINT, formData._value.Id).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully deleted.";
                        _this.onLoadUserChanged.emit();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                    }
                    _this.modal.dismiss();
                }, function (error) {
                    _this.msg = error;
                });
                break;
        }
    };
    UserManageComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.userFrm.enable() : this.userFrm.disable();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], UserManageComponent.prototype, "vmuser", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], UserManageComponent.prototype, "onLoadUserChanged", void 0);
    __decorate([
        core_1.ViewChild('modal'),
        __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
    ], UserManageComponent.prototype, "modal", void 0);
    __decorate([
        core_1.ViewChild('testHeader'),
        __metadata("design:type", core_1.ElementRef)
    ], UserManageComponent.prototype, "header", void 0);
    UserManageComponent = __decorate([
        core_1.Component({
            selector: 'user-manage',
            templateUrl: 'src/app/Components/user/usermanage.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, user_service_1.UserService, core_1.KeyValueDiffers])
    ], UserManageComponent);
    return UserManageComponent;
}());
exports.UserManageComponent = UserManageComponent;
//# sourceMappingURL=usermanage.component.js.map