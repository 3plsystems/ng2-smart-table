﻿import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Grid } from '../../lib/grid';
import { Cell } from '../../lib/data-set/cell';
import { Row } from '../../lib/data-set/row';

@Component({
    selector: 'ng2-smart-table-cell',
    template: `
    <table-cell-view-mode *ngIf="!isInEditing" [cell]="cell" (hyperlinkClick)="onHyperlinkClick($event)"></table-cell-view-mode>
    <table-cell-edit-mode *ngIf="isInEditing" [cell]="cell"
                          [inputClass]="inputClass"
                          (edited)="onEdited($event)">
    </table-cell-edit-mode>
  `,
})
export class CellComponent {

    @Input() grid: Grid;
    @Input() row: Row;
    @Input() editConfirm: EventEmitter<any>;
    @Input() createConfirm: EventEmitter<any>;
    @Input() isNew: boolean;
    @Input() cell: Cell;
    @Input() inputClass: string = '';
    @Input() mode: string = 'inline';
    @Input() isInEditing: boolean = false;

    @Output() edited = new EventEmitter<any>();
    @Output() hyperlinkClick: EventEmitter<any> = new EventEmitter<any>();

    onHyperlinkClick(event) {        
        return this.hyperlinkClick.emit(this.cell);
    }

    onEdited(event) {
        if (this.isNew) {
            this.grid.create(this.grid.getNewRow(), this.createConfirm);
        } else {
            this.grid.save(this.row, this.editConfirm);
        }
    }
}
