import { ETDSValueTypes } from '../../../../enums/src/lib/table-data-source/ETDSValueTypes.enum';
import { ITDSAction } from './ITDSAction.interface';

export interface ITDSColumnObject {
  columnDef: string,
  header: string,
  type: ETDSValueTypes,
  cell: any,
  action?: ITDSAction
}
