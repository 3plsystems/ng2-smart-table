import { ElementRef, OnChanges, AfterViewInit, EventEmitter } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
export declare class ViewCellComponent implements OnChanges, AfterViewInit {
    cell: Cell;
    hyperlinkClick: EventEmitter<any>;
    cellRef: ElementRef;
    ngOnChanges(changes: any): void;
    ngAfterViewInit(): void;
    onHyperLinkClick(): void;
    renderCustomValue(): void;
}
