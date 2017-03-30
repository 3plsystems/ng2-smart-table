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
var grid_1 = require("../../lib/grid");
var Ng2SmartTableTbodyComponent = (function () {
    function Ng2SmartTableTbodyComponent() {
        this.save = new core_1.EventEmitter();
        this.cancel = new core_1.EventEmitter();
        this.edit = new core_1.EventEmitter();
        this.hyperlinkClick = new core_1.EventEmitter();
        this.customAction1 = new core_1.EventEmitter();
        this.customAction2 = new core_1.EventEmitter();
        this.customAction3 = new core_1.EventEmitter();
        this.customAction4 = new core_1.EventEmitter();
        this.delete = new core_1.EventEmitter();
        this.edited = new core_1.EventEmitter();
        this.userSelectRow = new core_1.EventEmitter();
        this.editRowSelect = new core_1.EventEmitter();
        this.multipleSelectRow = new core_1.EventEmitter();
    }
    Ng2SmartTableTbodyComponent.prototype.OnCellClick = function (event) {
        this.hyperlinkClick.emit(event);
    };
    return Ng2SmartTableTbodyComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", grid_1.Grid)
], Ng2SmartTableTbodyComponent.prototype, "grid", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "source", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.EventEmitter)
], Ng2SmartTableTbodyComponent.prototype, "deleteConfirm", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.EventEmitter)
], Ng2SmartTableTbodyComponent.prototype, "editConfirm", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "save", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "cancel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "edit", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "hyperlinkClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "customAction1", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "customAction2", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "customAction3", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "customAction4", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "delete", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "edited", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "userSelectRow", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "editRowSelect", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTbodyComponent.prototype, "multipleSelectRow", void 0);
Ng2SmartTableTbodyComponent = __decorate([
    core_1.Component({
        selector: '[ng2-st-tbody]',
        templateUrl: './tbody.component.html'
    })
], Ng2SmartTableTbodyComponent);
exports.Ng2SmartTableTbodyComponent = Ng2SmartTableTbodyComponent;
//# sourceMappingURL=tbody.component.js.map