import { Component, Input } from '@angular/core';

@Component({
  selector: 'dumb-components-test-button-primary',
  template: `
    <button type='button'
            class='
            inline-flex
            items-center
            px-md
            py-sm
            border
            border-transparent
            text-sm
            font-medium
            rounded-lg
            shadow-sm
            text-white
            bg-primary-dark
            hover:bg-primary-light
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:bg-primary-light'>
      {{label}}
      <ng-content></ng-content>
    </button>
  `
})
export class ButtonPrimaryComponent {
  @Input() label?: string;
}
