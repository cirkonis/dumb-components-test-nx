import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { GenericTableComponent } from './generic-table.component';
import { ETDSValueTypes } from '../../../../../enums/src/lib/table-data-source/ETDSValueTypes.enum';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { IDrink } from '../../../../../interfaces/src/lib/test-data-interfaces/IDrink';

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

export const Table = Template.bind({});
Table.args = {
    dataSource: [
  { name: 'Jim Beam', liquor: 'WHISKY', proof: 80 },
  { name: 'Jack D.', liquor: 'WHISKY', proof: 80 },
  { name: 'Buffalo Trace', liquor: 'WHISKY', proof: 80 },
  { name: 'Knob Creek', liquor: 'WHISKY', proof: 80 },
  { name: 'Makers Mark', liquor: 'WHISKY', proof: 80 },
  { name: 'Bushmills', liquor: 'WHISKY', proof: 80 },
  { name: 'Three Roses', liquor: 'WHISKY', proof: 80 },
  { name: 'Jameson', liquor: 'WHISKY', proof: 80 },
  { name: 'Smirnoff', liquor: 'VODKA', proof: 80 },
  { name: 'Stolichnaya', liquor: 'VODKA', proof: 80 },
  { name: 'Grey Goose', liquor: 'VODKA', proof: 80 },
  { name: 'Sailor Jerry', liquor: 'RUM', proof: 80 },
  { name: 'Captain Morgan', liquor: 'RUM', proof: 80 },
  { name: 'Patrón', liquor: 'TEQUILA', proof: 80 },
  { name: 'Jose Cuervo', liquor: 'TEQUILA', proof: 80 }
],

  columnObjects: [
  { columnDef: 'name',     header: 'Name',   cell: (row: IDrink) => `${row.name}`, type: ETDSValueTypes.LONG_TEXT     },
  { columnDef: 'liquor',   header: 'Liquor', cell: (row: IDrink) => `${row.liquor}`, type:  ETDSValueTypes.SHORT_TEXT   },
  { columnDef: 'proof',   header: 'Proof', cell: (row: IDrink) => `${row.proof}`, type:  ETDSValueTypes.NUMBER   },
],
  displayedColumns: ['name', 'liquor', 'proof'],
}
