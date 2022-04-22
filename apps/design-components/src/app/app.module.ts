import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedDesignComponentsTestModule } from '@dumb-components-test/shared-design-components-test-1';

import { AppComponent } from './app.component';
import { FruitTableComponent } from './components/fruit-table/fruit-table.component';

@NgModule({
  declarations: [AppComponent, FruitTableComponent],
  imports: [BrowserModule, SharedDesignComponentsTestModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
