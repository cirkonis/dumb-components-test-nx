import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { GenericTableComponent } from './generic-table.component';
import { ETDSValueTypes } from '../../../../../enums/src/lib/table-data-source/ETDSValueTypes.enum';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export default {
  title: 'GenericTableComponent',
  component: GenericTableComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, CdkTableModule],
    })
  ],
} as Meta<GenericTableComponent>;

const Template: Story<GenericTableComponent> = (args: GenericTableComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
  dataSource: [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
    {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
    {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
    {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
    {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
    {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
    {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
    {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
    {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
    {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
  ],
  columnObjects: [
  { columnDef: 'position', header: 'No.',    cell: (row: Element) => `${row.position}`, type: ETDSValueTypes.SHORT_TEXT },
  { columnDef: 'name',     header: 'Name',   cell: (row: Element) => `${row.name}`, type: ETDSValueTypes.SHORT_TEXT     },
  { columnDef: 'weight',   header: 'Weight', cell: (row: Element) => `${row.weight}`, type:  ETDSValueTypes.NUMBER   },
  { columnDef: 'symbol',   header: 'Symbol', cell: (row: Element) => `${row.symbol}`, type:  ETDSValueTypes.SHORT_TEXT   },
],
  displayedColumns: ['position', 'name', 'weight', 'symbol'],
}
