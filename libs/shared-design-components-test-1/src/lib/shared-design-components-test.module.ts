import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { ButtonPrimaryComponent } from './buttons/button-primary/button-primary.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderComponent,
    CardComponent,
    ButtonPrimaryComponent
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    ButtonPrimaryComponent
  ],
})
export class SharedDesignComponentsTestModule {}
