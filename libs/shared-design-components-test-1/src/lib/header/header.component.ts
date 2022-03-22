import {Component} from '@angular/core';

@Component({
  selector: 'dumb-components-test-header',
  template: `
    <header class="px-xl py-md bg-primary-light text-xl font-bold shadow-md">
      Angular + Tailwind CSS + Nx
    </header>`,
})
export class HeaderComponent {}
