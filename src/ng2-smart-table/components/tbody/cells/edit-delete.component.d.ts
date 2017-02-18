import { EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
export declare class TbodyEditDeleteComponent {
    grid: Grid;
    row: Row;
    source: any;
    deleteConfirm: EventEmitter<any>;
    editConfirm: EventEmitter<any>;
    customAction1: EventEmitter<any>;
    customAction2: EventEmitter<any>;
    customAction3: EventEmitter<any>;
    customAction4: EventEmitter<any>;
    edit: EventEmitter<any>;
    delete: EventEmitter<any>;
    editRowSelect: EventEmitter<any>;
    onCustomAction1(event: any): void;
    onCustomAction2(event: any): void;
    onCustomAction3(event: any): void;
    onCustomAction4(event: any): void;
    onEdit(event: any): void;
    onDelete(event: any): void;
}
