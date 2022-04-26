import { Component } from '@angular/core';
import { ITDSColumnObject } from '../../../../../../libs/interfaces/src/lib/table-data-source/ITDSCellObject.interface';
import { ETDSValueTypes } from '../../../../../../libs/enums/src/lib/table-data-source/ETDSValueTypes.enum';
import { IDrink } from '../../../../../../libs/interfaces/src/lib/test-data-interfaces/IDrink';
import { EDrinkTypes } from '../../../../../../libs/enums/src/lib/test-data-enums/EDrinkTypes';

@Component({
  selector: 'dumb-components-test-another-specific-table',
  template: `
    <dumb-components-test-generic-table [dataSource]='data' [columnObjects]='columns' [displayedColumns]='displayedColumns'></dumb-components-test-generic-table>
  `,
})
export class AnotherSpecificTableComponent {
  data: IDrink[] = [
    {name: 'Jim Beam',  liquor: EDrinkTypes.WHISKY, proof: 80},
    {name: 'Jack D.',  liquor: EDrinkTypes.WHISKY, proof: 80},
    {name: 'Buffalo Trace',  liquor: EDrinkTypes.WHISKY, proof: 80},
    {name: 'Knob Creek',  liquor: EDrinkTypes.WHISKY, proof: 80},
    {name: 'Makers Mark',  liquor: EDrinkTypes.WHISKY, proof: 80},
    {name: 'Bushmills',  liquor: EDrinkTypes.WHISKY, proof: 80},
    {name: 'Three Roses',  liquor: EDrinkTypes.WHISKY, proof: 80},
    {name: 'Jameson',  liquor: EDrinkTypes.WHISKY, proof: 80},
    {name: 'Smirnoff',  liquor: EDrinkTypes.VODKA, proof: 80},
    {name: 'Stolichnaya',  liquor: EDrinkTypes.VODKA, proof: 80},
    {name: 'Grey Goose',  liquor: EDrinkTypes.VODKA, proof: 80},
    {name: 'Sailor Jerry',  liquor: EDrinkTypes.RUM, proof: 80},
    {name: 'Captain Morgan',  liquor: EDrinkTypes.RUM, proof: 80},
    {name: 'Patrón',  liquor: EDrinkTypes.TEQUILA, proof: 80},
    {name: 'Jose Cuervo',  liquor: EDrinkTypes.TEQUILA, proof: 80},
  ];

  // the mapping has to be done to define dynamic columns for the table

  columns: ITDSColumnObject[] = [
    { columnDef: 'name',     header: 'Name',   cell: (row: IDrink) => `${row.name}`, type: ETDSValueTypes.LONG_TEXT     },
    { columnDef: 'liquor',   header: 'Liquor', cell: (row: IDrink) => `${row.liquor}`, type:  ETDSValueTypes.SHORT_TEXT   },
    { columnDef: 'proof',   header: 'Proof', cell: (row: IDrink) => `${row.proof}`, type:  ETDSValueTypes.NUMBER   },
  ];

  displayedColumns = this.columns.map(c => c.columnDef);
  // next would be connecting this to a proper data source instead of an array but thats not the biggest deal now.

}
