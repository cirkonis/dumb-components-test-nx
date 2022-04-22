import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiModule } from '../../../../libs/ui/src/lib/ui.module';

import { AppComponent } from './app.component';
import { FruitTableComponent } from './components/fruit-table/fruit-table.component';

@NgModule({
  declarations: [AppComponent, FruitTableComponent],
  imports: [BrowserModule, UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
