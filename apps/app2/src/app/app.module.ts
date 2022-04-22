import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpecificTableComponent } from './components/specific-table/specific-table.component';
import { AnotherSpecificTableComponent } from './components/another-specific-table/another-specific-table.component';
import { UiModule } from '../../../../libs/ui/src/lib/ui.module';

@NgModule({
  declarations: [AppComponent, SpecificTableComponent, AnotherSpecificTableComponent],
  imports: [BrowserModule, UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
