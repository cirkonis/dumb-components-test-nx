import { Component, Input } from '@angular/core';

@Component({
  selector: 'dumb-components-test-header',
  template: `
    <header class="px-xl py-md bg-primary-light text-xl font-bold shadow-md">
      {{header}}
      <ng-content></ng-content>
    </header>`,
})
export class HeaderComponent {
  @Input() header?: string
}
