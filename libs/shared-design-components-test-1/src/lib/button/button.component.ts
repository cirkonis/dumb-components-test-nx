import { Component, Input } from '@angular/core';

@Component({
  selector: 'dumb-components-test-button',
  template: `      <a
    class='py-sm px-md bg-primary-dark hover:bg-primary text-white flex self-end'
    href='{{ href }}'
    target='_blank'
    rel='noopener noreferrer'
  >
    <ng-content></ng-content>
  </a>`
})
export class ButtonComponent {
  @Input() href?: string;
}
