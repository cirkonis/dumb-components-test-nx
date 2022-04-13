import { Component, Input, OnInit } from '@angular/core';
import { ITDSColumnObject } from '../../../../../interfaces/src/lib/table-data-source/ITDSCellObject.interface';

@Component({
  selector: 'dumb-components-test-generic-table',
  template: `
    <table
      class='bg-white flex-1 w-auto'
      cdk-table [dataSource]='dataSource'>
      <!-- Header and Row Declarations -->
      <tr
        class='bg-secondary-light'
        cdk-header-row *cdkHeaderRowDef='displayedColumns'></tr>
      <tr cdk-row *cdkRowDef='let row; columns: displayedColumns'></tr>

      <ng-container *ngFor='let column of columnObjects;let i = index' cdkColumnDef='{{column.columnDef}}'>
        <th cdk-header-cell *cdkHeaderCellDef>{{column.header}}</th>
        <td cdk-cell *cdkCellDef='let row'>{{column.cell(row)}}</td>
      </ng-container>
    </table>
  `,
})
export class GenericTableComponent implements OnInit{
  @Input() dataSource!: any[];
  @Input() columnObjects!: ITDSColumnObject[];
  @Input() displayedColumns: string[] = [];

  ngOnInit(): void {
    this.displayedColumns = this.columnObjects.map(c => c.columnDef);
  }

}
