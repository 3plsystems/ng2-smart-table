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
var row_1 = require("../../../lib/data-set/row");
var TheadFormRowComponent = (function () {
    function TheadFormRowComponent() {
        this.create = new core_1.EventEmitter();
    }
    TheadFormRowComponent.prototype.onCreate = function (event) {
        event.stopPropagation();
        this.grid.create(this.grid.getNewRow(), this.createConfirm);
    };
    return TheadFormRowComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", grid_1.Grid)
], TheadFormRowComponent.prototype, "grid", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", row_1.Row)
], TheadFormRowComponent.prototype, "row", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.EventEmitter)
], TheadFormRowComponent.prototype, "createConfirm", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TheadFormRowComponent.prototype, "create", void 0);
TheadFormRowComponent = __decorate([
    core_1.Component({
        selector: '[ng2-st-thead-form-row]',
        template: "\n      <td *ngIf=\"grid.isMultiSelectVisible()\"></td>\n      <td class=\"ng2-smart-actions\">\n        <ng2-st-actions [grid]=\"grid\" (create)=\"onCreate($event)\"></ng2-st-actions>\n      </td>\n      <td *ngFor=\"let cell of grid.getNewRow().getCells()\">\n        <ng2-smart-table-cell [cell]=\"cell\"\n                              [grid]=\"grid\"\n                              [isNew]=\"true\"\n                              [createConfirm]=\"createConfirm\"\n                              [inputClass]=\"grid.getSetting('add.inputClass')\"\n                              [isInEditing]=\"grid.getNewRow().isInEditing\"\n                              (edited)=\"onCreate($event)\">\n        </ng2-smart-table-cell>\n      </td>\n    "
    })
], TheadFormRowComponent);
exports.TheadFormRowComponent = TheadFormRowComponent;
//# sourceMappingURL=thead-form-row.component.js.map