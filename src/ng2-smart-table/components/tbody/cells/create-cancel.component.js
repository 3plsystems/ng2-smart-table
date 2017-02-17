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
var TbodyCreateCancelComponent = (function () {
    function TbodyCreateCancelComponent() {
    }
    TbodyCreateCancelComponent.prototype.onSave = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.grid.save(this.row, this.editConfirm);
    };
    TbodyCreateCancelComponent.prototype.onCancelEdit = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.row.isInEditing = false;
    };
    return TbodyCreateCancelComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", grid_1.Grid)
], TbodyCreateCancelComponent.prototype, "grid", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", row_1.Row)
], TbodyCreateCancelComponent.prototype, "row", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.EventEmitter)
], TbodyCreateCancelComponent.prototype, "editConfirm", void 0);
TbodyCreateCancelComponent = __decorate([
    core_1.Component({
        selector: 'ng2-st-tbody-create-cancel',
        template: "\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-edit-save\"\n        [innerHTML]=\"grid.getSetting('edit.saveButtonContent')\" (click)=\"onSave($event)\"></a>\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-edit-cancel\"\n        [innerHTML]=\"grid.getSetting('edit.cancelButtonContent')\" (click)=\"onCancelEdit($event)\"></a>\n  "
    })
], TbodyCreateCancelComponent);
exports.TbodyCreateCancelComponent = TbodyCreateCancelComponent;
//# sourceMappingURL=create-cancel.component.js.map