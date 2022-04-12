import { Component } from '@angular/core';
import { WindowUtil } from '../../../../libs/utils/src/lib/basic-utils/window.util';

@Component({
  selector: 'dumb-components-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'design-components';

  window = new WindowUtil();

}
