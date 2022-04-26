import { Component } from '@angular/core';
import { ITDSColumnObject } from '../../../../../../libs/interfaces/src/lib/table-data-source/ITDSCellObject.interface';
import { ETDSValueTypes } from '../../../../../../libs/enums/src/lib/table-data-source/ETDSValueTypes.enum';
import { IFruit } from '../../../../../../libs/interfaces/src/lib/test-data-interfaces/IFruit';

@Component({
  selector: 'dumb-components-test-fruit-table',
  template: `
    <dumb-components-test-generic-table
      [dataSource]='data' [columnObjects]='columns'
      [displayedColumns]='displayedColumns'></dumb-components-test-generic-table>`
})

export class FruitTableComponent {
  data: IFruit[] = [
    { name: 'Orange', color: 'Orange' }

  ];

  // the mapping has to be done to define dynamic columns for the table
  columns: ITDSColumnObject[] = [
    { columnDef: 'name', header: 'Name', cell: (row: IFruit) => `${row.name}`, type: ETDSValueTypes.SHORT_TEXT },
    { columnDef: 'color', header: 'Color', cell: (row: IFruit) => `${row.color}`, type: ETDSValueTypes.LONG_TEXT }
  ];

  displayedColumns = this.columns.map(c => c.columnDef);
  // next would be connecting this to a proper data source instead of an array but thats not the biggest deal now.
}
