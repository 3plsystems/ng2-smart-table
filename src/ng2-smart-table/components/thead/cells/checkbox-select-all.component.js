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
var core_1 = require("@angular/core");
var grid_1 = require("../../../lib/grid");
var CheckboxSelectAllComponent = (function () {
    function CheckboxSelectAllComponent() {
    }
    return CheckboxSelectAllComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", grid_1.Grid)
], CheckboxSelectAllComponent.prototype, "grid", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CheckboxSelectAllComponent.prototype, "source", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], CheckboxSelectAllComponent.prototype, "isAllSelected", void 0);
CheckboxSelectAllComponent = __decorate([
    core_1.Component({
        selector: '[ng2-st-checkbox-select-all]',
        template: "\n    <input type=\"checkbox\" [ngModel]=\"isAllSelected\">\n  "
    })
], CheckboxSelectAllComponent);
exports.CheckboxSelectAllComponent = CheckboxSelectAllComponent;
//# sourceMappingURL=checkbox-select-all.component.js.map