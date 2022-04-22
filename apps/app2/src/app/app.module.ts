import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedDesignComponentsTestModule } from '@dumb-components-test/shared-design-components-test-1'

import { AppComponent } from './app.component';
import { SpecificTableComponent } from './components/specific-table/specific-table.component';
import { AnotherSpecificTableComponent } from './components/another-specific-table/another-specific-table.component';

@NgModule({
  declarations: [AppComponent, SpecificTableComponent, AnotherSpecificTableComponent],
  imports: [BrowserModule, SharedDesignComponentsTestModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
