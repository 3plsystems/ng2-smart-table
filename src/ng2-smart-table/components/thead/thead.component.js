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
var Ng2SmartTableTheadComponent = (function () {
    function Ng2SmartTableTheadComponent() {
        this.sort = new core_1.EventEmitter();
        this.selectAllRows = new core_1.EventEmitter();
        this.create = new core_1.EventEmitter();
        this.filter = new core_1.EventEmitter();
    }
    return Ng2SmartTableTheadComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", grid_1.Grid)
], Ng2SmartTableTheadComponent.prototype, "grid", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], Ng2SmartTableTheadComponent.prototype, "source", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], Ng2SmartTableTheadComponent.prototype, "isAllSelected", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.EventEmitter)
], Ng2SmartTableTheadComponent.prototype, "createConfirm", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTheadComponent.prototype, "sort", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTheadComponent.prototype, "selectAllRows", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTheadComponent.prototype, "create", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Ng2SmartTableTheadComponent.prototype, "filter", void 0);
Ng2SmartTableTheadComponent = __decorate([
    core_1.Component({
        selector: '[ng2-st-thead]',
        templateUrl: './thead.component.html'
    })
], Ng2SmartTableTheadComponent);
exports.Ng2SmartTableTheadComponent = Ng2SmartTableTheadComponent;
//# sourceMappingURL=thead.component.js.map