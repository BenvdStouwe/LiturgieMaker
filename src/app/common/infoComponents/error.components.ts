import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
<ngb-alert type="danger"
  [dismissible]="true"
  (close)="closeAlert()">
<i class="fa fa-exclamation-triangle"aria-hidden="true"></i>
{{tekst}} <a class="alert-link" *ngIf="retry" href="javascript:;" (click)="sendRetry()">Klik hier om het opnieuw te proberen.</a>
</ngb-alert>`
})
export class ErrorComponent {
  @Input() tekst: string;
  @Input() retry: boolean;
  @Output() close = new EventEmitter<boolean>();

  closeAlert(): void {
    this.close.emit(false);
  }

  sendRetry(): void {
    this.close.emit(true);
  }
}
