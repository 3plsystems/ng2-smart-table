import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';

@Component({
  selector: 'ng2-st-tbody-edit-delete',
  template: `
    <a href="#" *ngIf="grid.getSetting('actions.customAction4')" class="ng2-smart-action ng2-smart-action-custom4-custom4"
        [innerHTML]="grid.getSetting('customAction4.custom4ButtonContent')" [title]="grid.getSetting('customAction4.title')" (click)="onCustomAction4($event)"></a>
    <a href="#" *ngIf="grid.getSetting('actions.customAction3')" class="ng2-smart-action ng2-smart-action-custom3-custom3"
        [innerHTML]="grid.getSetting('customAction3.custom3ButtonContent')" [title]="grid.getSetting('customAction3.title')" (click)="onCustomAction3($event)"></a>
    <a href="#" *ngIf="grid.getSetting('actions.customAction2')" class="ng2-smart-action ng2-smart-action-custom2-custom2"
        [innerHTML]="grid.getSetting('customAction2.custom2ButtonContent')" [title]="grid.getSetting('customAction2.title')" (click)="onCustomAction2($event)"></a>
    <a href="#" *ngIf="grid.getSetting('actions.customAction1')" class="ng2-smart-action ng2-smart-action-custom1-custom1"
        [innerHTML]="grid.getSetting('customAction1.custom1ButtonContent')" [title]="grid.getSetting('customAction1.title')" (click)="onCustomAction1($event)"></a>
    <a href="#" *ngIf="grid.getSetting('actions.edit')" class="ng2-smart-action ng2-smart-action-edit-edit"
        [innerHTML]="grid.getSetting('edit.editButtonContent')" (click)="onEdit($event)"></a>
    <a href="#" *ngIf="grid.getSetting('actions.delete')" class="ng2-smart-action ng2-smart-action-delete-delete"
        [innerHTML]="grid.getSetting('delete.deleteButtonContent')" (click)="onDelete($event)"></a>
  `
})
export class TbodyEditDeleteComponent {

  @Input() grid: Grid;
  @Input() row: Row;
  @Input() source: any;
  @Input() deleteConfirm: EventEmitter<any>;
  @Input() editConfirm: EventEmitter<any>;
  @Output() customAction1 = new EventEmitter<any>();
  @Output() customAction2 = new EventEmitter<any>();
  @Output() customAction3 = new EventEmitter<any>();
  @Output() customAction4 = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() editRowSelect = new EventEmitter<any>();

  onCustomAction1(event: any) {
    event.preventDefault();
    event.stopPropagation();

    if (this.grid.getSetting('mode') === 'external') {
      this.customAction1.emit({
        data: this.row.getData(),
        source: this.source
      });
    }
  }

  onCustomAction2(event: any) {
    event.preventDefault();
    event.stopPropagation();

    if (this.grid.getSetting('mode') === 'external') {
      this.customAction2.emit({
        data: this.row.getData(),
        source: this.source
      });
    }
  }

  onCustomAction3(event: any) {
    event.preventDefault();
    event.stopPropagation();

    if (this.grid.getSetting('mode') === 'external') {
      this.customAction3.emit({
        data: this.row.getData(),
        source: this.source
      });
    }
  }

  onCustomAction4(event: any) {
    event.preventDefault();
    event.stopPropagation();

    if (this.grid.getSetting('mode') === 'external') {
      this.customAction4.emit({
        data: this.row.getData(),
        source: this.source
      });
    }
  }

  onEdit(event: any) {
    event.preventDefault();
    event.stopPropagation();

    this.editRowSelect.emit(this.row);

    if (this.grid.getSetting('mode') === 'external') {
      this.edit.emit({
        data: this.row.getData(),
        source: this.source
      });
    } else {
      this.grid.edit(this.row);
    }
  }

  onDelete(event: any) {
    event.preventDefault();
    event.stopPropagation();

    if (this.grid.getSetting('mode') === 'external') {
      this.delete.emit({
        data: this.row.getData(),
        source: this.source
      });
    } else {
      this.grid.delete(this.row, this.deleteConfirm);
    }
  }
}
