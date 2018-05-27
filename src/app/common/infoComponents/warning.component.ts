import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-warning',
  template: `
<ngb-alert type="warning"
[dismissible]="false">
<i class="fa fa-info-circle"aria-hidden="true"></i>
 {{tekst}}
</ngb-alert>`
})
export class WarningComponent {
  @Input() tekst: string;
}
