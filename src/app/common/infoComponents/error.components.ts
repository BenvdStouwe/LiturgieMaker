import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
<ngb-alert type="danger"
  [dismissible]="true"
  (close)="closeAlert()">
<i class="fa fa-exclamation-triangle"
aria-hidden="true"></i> {{tekst}}
</ngb-alert>`
})
export class ErrorComponent {
  @Input() tekst: string;
  @Output() close = new EventEmitter<any>();

  closeAlert(): void {
    this.close.emit();
  }
}
