import { Component } from '@angular/core';

import { routerTransition } from './routerTransition.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [routerTransition]
})
export class AppComponent {
  getState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
