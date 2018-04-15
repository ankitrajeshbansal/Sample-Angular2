"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CanDeactivateGuard = /** @class */ (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component, currentroute, currentstate, nextstate) {
        return component.canDeactivate();
    };
    return CanDeactivateGuard;
}());
exports.CanDeactivateGuard = CanDeactivateGuard;
//# sourceMappingURL=can-component-deactivate.guard.js.map