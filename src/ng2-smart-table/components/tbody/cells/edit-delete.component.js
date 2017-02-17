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
var TbodyEditDeleteComponent = (function () {
    function TbodyEditDeleteComponent() {
        this.edit = new core_1.EventEmitter();
        this.delete = new core_1.EventEmitter();
        this.editRowSelect = new core_1.EventEmitter();
    }
    TbodyEditDeleteComponent.prototype.onEdit = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.editRowSelect.emit(this.row);
        if (this.grid.getSetting('mode') === 'external') {
            this.edit.emit({
                data: this.row.getData(),
                source: this.source
            });
        }
        else {
            this.grid.edit(this.row);
        }
    };
    TbodyEditDeleteComponent.prototype.onDelete = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.delete.emit({
                data: this.row.getData(),
                source: this.source
            });
        }
        else {
            this.grid.delete(this.row, this.deleteConfirm);
        }
    };
    return TbodyEditDeleteComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", grid_1.Grid)
], TbodyEditDeleteComponent.prototype, "grid", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", row_1.Row)
], TbodyEditDeleteComponent.prototype, "row", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TbodyEditDeleteComponent.prototype, "source", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.EventEmitter)
], TbodyEditDeleteComponent.prototype, "deleteConfirm", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.EventEmitter)
], TbodyEditDeleteComponent.prototype, "editConfirm", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TbodyEditDeleteComponent.prototype, "edit", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TbodyEditDeleteComponent.prototype, "delete", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TbodyEditDeleteComponent.prototype, "editRowSelect", void 0);
TbodyEditDeleteComponent = __decorate([
    core_1.Component({
        selector: 'ng2-st-tbody-edit-delete',
        template: "\n    <a href=\"#\" *ngIf=\"grid.getSetting('actions.edit')\" class=\"ng2-smart-action ng2-smart-action-edit-edit\"\n        [innerHTML]=\"grid.getSetting('edit.editButtonContent')\" (click)=\"onEdit($event)\"></a>\n    <a href=\"#\" *ngIf=\"grid.getSetting('actions.delete')\" class=\"ng2-smart-action ng2-smart-action-delete-delete\"\n        [innerHTML]=\"grid.getSetting('delete.deleteButtonContent')\" (click)=\"onDelete($event)\"></a>\n  "
    })
], TbodyEditDeleteComponent);
exports.TbodyEditDeleteComponent = TbodyEditDeleteComponent;
//# sourceMappingURL=edit-delete.component.js.map