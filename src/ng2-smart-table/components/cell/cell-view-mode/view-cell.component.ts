import { Component, Input, Output, ViewChild, ElementRef, OnChanges, AfterViewInit, EventEmitter } from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';

@Component({
  selector: 'table-cell-view-mode',
  template: `
    <div [ngSwitch]="cell.getColumn().type">
        <div *ngSwitchCase="'html'" #cellContainer [innerHTML]="cell.getValue()"></div>
        <div *ngSwitchCase="'hyperlink'" #cellContainer><a href='javascript:void(0)' (click)='onHyperLinkClick();' [innerHTML]="cell.getValue()"></a></div>
        <div *ngSwitchDefault #cellContainer>{{ cell.getValue() }}</div>
    </div>
    `
})
export class ViewCellComponent implements OnChanges, AfterViewInit {

  @Input() cell: Cell;
  @Output() hyperlinkClick: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('cellContainer') cellRef: ElementRef;

  ngOnChanges(changes): void {
    setTimeout(() => this.renderCustomValue());
  }

  ngAfterViewInit(): void {
    this.renderCustomValue();
  }

  onHyperLinkClick() {
    this.hyperlinkClick.emit(this.cell);
  }

  renderCustomValue(): void {
    const cellRenderFunc = this.cell.getColumn().getCellRenderFunction();

    if (cellRenderFunc && this.cellRef)
      cellRenderFunc.call(null, this.cell, this.cellRef.nativeElement);
  }
}
