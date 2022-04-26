import { EDrinkTypes } from '../../../../enums/src/lib/test-data-enums/EDrinkTypes';

export interface IDrink {
  'name': string,
  'liquor': EDrinkTypes,
  'proof': number;
}
