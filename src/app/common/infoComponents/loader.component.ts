import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
<ngb-alert type="info"
  [dismissible]="false">
<i class="fa fa-spin fa-refresh"
aria-hidden="true"></i> {{tekst}}
</ngb-alert>`
})
export class LoaderComponent {
  @Input() tekst: string;
}
