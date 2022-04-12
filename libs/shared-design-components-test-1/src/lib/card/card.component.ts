import {Component, Input} from '@angular/core';

@Component({
  selector: 'dumb-components-test-card',
  template: `
    <div class="h-full flex flex-col p-lg bg-secondary-light shadow-md hover:shadow-lg">
      <div class="pb-md text-lg font-bold">{{ title }}</div>
      <p class="mb-xl flex-1">
        <ng-content select='[text]'></ng-content>
      </p>
        <div class="flex self-end">
          <ng-content select='[action]'></ng-content>
        </div>
    </div>`
})
export class CardComponent {
  @Input() title?: string;
}
