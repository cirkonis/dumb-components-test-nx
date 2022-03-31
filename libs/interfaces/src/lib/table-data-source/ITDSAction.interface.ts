import { ETDSActionTypes } from '../../../../enums/src/lib/table-data-source/ETDSActionTypes.enum';

export interface ITDSAction {
  svgIconPath: string
  actionType: ETDSActionTypes
}
