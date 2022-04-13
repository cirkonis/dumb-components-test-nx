import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { ButtonPrimaryComponent } from './buttons/button-primary/button-primary.component';
import { GenericTableComponent } from './tables/generic-table/generic-table.component';

import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  imports: [CommonModule, CdkTableModule],
  declarations: [
    HeaderComponent,
    CardComponent,
    ButtonPrimaryComponent,
    GenericTableComponent
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    ButtonPrimaryComponent,
    GenericTableComponent
  ],
})
export class SharedDesignComponentsTestModule {}
