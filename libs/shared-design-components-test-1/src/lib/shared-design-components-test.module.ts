import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderComponent,
    CardComponent,
    ButtonComponent
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    ButtonComponent
  ],
})
export class SharedDesignComponentsTestModule {}
