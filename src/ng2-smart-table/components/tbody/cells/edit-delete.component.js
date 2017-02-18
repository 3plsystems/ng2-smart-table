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
        this.customAction1 = new core_1.EventEmitter();
        this.customAction2 = new core_1.EventEmitter();
        this.customAction3 = new core_1.EventEmitter();
        this.customAction4 = new core_1.EventEmitter();
        this.edit = new core_1.EventEmitter();
        this.delete = new core_1.EventEmitter();
        this.editRowSelect = new core_1.EventEmitter();
    }
    TbodyEditDeleteComponent.prototype.onCustomAction1 = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.customAction1.emit({
                data: this.row.getData(),
                source: this.source
            });
        }
    };
    TbodyEditDeleteComponent.prototype.onCustomAction2 = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.customAction2.emit({
                data: this.row.getData(),
                source: this.source
            });
        }
    };
    TbodyEditDeleteComponent.prototype.onCustomAction3 = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.customAction3.emit({
                data: this.row.getData(),
                source: this.source
            });
        }
    };
    TbodyEditDeleteComponent.prototype.onCustomAction4 = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.customAction4.emit({
                data: this.row.getData(),
                source: this.source
            });
        }
    };
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
], TbodyEditDeleteComponent.prototype, "customAction1", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TbodyEditDeleteComponent.prototype, "customAction2", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TbodyEditDeleteComponent.prototype, "customAction3", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TbodyEditDeleteComponent.prototype, "customAction4", void 0);
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
        template: "\n    <a href=\"#\" *ngIf=\"grid.getSetting('actions.customAction4')\" class=\"ng2-smart-action ng2-smart-action-custom4-custom4\"\n        [innerHTML]=\"grid.getSetting('customAction4.custom4ButtonContent')\" [title]=\"grid.getSetting('customAction4.title')\" (click)=\"onCustomAction4($event)\"></a>\n    <a href=\"#\" *ngIf=\"grid.getSetting('actions.customAction3')\" class=\"ng2-smart-action ng2-smart-action-custom3-custom3\"\n        [innerHTML]=\"grid.getSetting('customAction3.custom3ButtonContent')\" [title]=\"grid.getSetting('customAction3.title')\" (click)=\"onCustomAction3($event)\"></a>\n    <a href=\"#\" *ngIf=\"grid.getSetting('actions.customAction2')\" class=\"ng2-smart-action ng2-smart-action-custom2-custom2\"\n        [innerHTML]=\"grid.getSetting('customAction2.custom2ButtonContent')\" [title]=\"grid.getSetting('customAction2.title')\" (click)=\"onCustomAction2($event)\"></a>\n    <a href=\"#\" *ngIf=\"grid.getSetting('actions.customAction1')\" class=\"ng2-smart-action ng2-smart-action-custom1-custom1\"\n        [innerHTML]=\"grid.getSetting('customAction1.custom1ButtonContent')\" [title]=\"grid.getSetting('customAction1.title')\" (click)=\"onCustomAction1($event)\"></a>\n    <a href=\"#\" *ngIf=\"grid.getSetting('actions.edit')\" class=\"ng2-smart-action ng2-smart-action-edit-edit\"\n        [innerHTML]=\"grid.getSetting('edit.editButtonContent')\" (click)=\"onEdit($event)\"></a>\n    <a href=\"#\" *ngIf=\"grid.getSetting('actions.delete')\" class=\"ng2-smart-action ng2-smart-action-delete-delete\"\n        [innerHTML]=\"grid.getSetting('delete.deleteButtonContent')\" (click)=\"onDelete($event)\"></a>\n  "
    })
], TbodyEditDeleteComponent);
exports.TbodyEditDeleteComponent = TbodyEditDeleteComponent;
//# sourceMappingURL=edit-delete.component.js.map