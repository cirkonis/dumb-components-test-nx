import {Component, Input} from '@angular/core';

@Component({
  selector: 'dumb-components-test-card',
  template: `
    <div class="h-full flex flex-col p-lg bg-secondary-light shadow-md hover:shadow-lg">
      <div class="pb-md text-lg font-bold">{{ title }}</div>
      <p class="mb-xl flex-1">
        <ng-content></ng-content>
      </p>
      <a
        class="py-sm px-md bg-primary-dark hover:bg-primary text-white flex self-end"
        href="{{ url }}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Show me!
      </a>
    </div>`
})
export class CardComponent {
  @Input() title?: string;
  @Input() url?: string;
}