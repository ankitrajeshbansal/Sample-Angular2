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
var DonotPasteDirective = /** @class */ (function () {
    function DonotPasteDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    DonotPasteDirective.prototype.keydown = function (eventData) {
        var _this = this;
        if (eventData.ctrlKey == true && (eventData.which == 118 || eventData.which == 86)) {
            this.backgroundColor = 'pink';
            setTimeout(function () {
                _this.backgroundColor = 'white';
            }, 500);
            eventData.preventDefault();
        }
    };
    __decorate([
        core_1.HostListener('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], DonotPasteDirective.prototype, "keydown", null);
    __decorate([
        core_1.HostBinding('style.backgroundColor'),
        __metadata("design:type", String)
    ], DonotPasteDirective.prototype, "backgroundColor", void 0);
    DonotPasteDirective = __decorate([
        core_1.Directive({
            selector: '[donotpaste]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
    ], DonotPasteDirective);
    return DonotPasteDirective;
}());
exports.DonotPasteDirective = DonotPasteDirective;
//# sourceMappingURL=donotpaste.directive.js.map