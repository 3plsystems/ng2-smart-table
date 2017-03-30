import { EventEmitter } from '@angular/core';
import { Grid } from '../../lib/grid';
export declare class Ng2SmartTableTbodyComponent {
    grid: Grid;
    source: any;
    deleteConfirm: EventEmitter<any>;
    editConfirm: EventEmitter<any>;
    save: EventEmitter<any>;
    cancel: EventEmitter<any>;
    edit: EventEmitter<any>;
    hyperlinkClick: EventEmitter<any>;
    customAction1: EventEmitter<any>;
    customAction2: EventEmitter<any>;
    customAction3: EventEmitter<any>;
    customAction4: EventEmitter<any>;
    delete: EventEmitter<any>;
    edited: EventEmitter<any>;
    userSelectRow: EventEmitter<any>;
    editRowSelect: EventEmitter<any>;
    multipleSelectRow: EventEmitter<any>;
    OnCellClick(event: any): void;
}
