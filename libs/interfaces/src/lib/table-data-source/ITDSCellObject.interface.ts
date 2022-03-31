import { ETDSValueTypes } from '../../../../enums/src/lib/table-data-source/ETDSValueTypes.enum';
import { ITDSAction } from './ITDSAction.interface';

export interface ITDSCellObject{
  header: string,
  type: ETDSValueTypes,
  value: any,
  action?: ITDSAction
}
