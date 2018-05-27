import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styles: [
    `
    .danger-backdrop {
      background-color: #ff000050;
    }
    `
  ]
})
export class ConfirmationModalComponent {
  @Input() inhoud = 'Weet u zeker dat u dit wilt doen?';
  @Input() type = 'primary';
  @Output() close = new EventEmitter<boolean>();

  constructor(public modal: NgbActiveModal) {}
}
