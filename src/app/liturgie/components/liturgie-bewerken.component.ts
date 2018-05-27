import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

import { Liturgie } from '../model/liturgie';
import {
  NgbModal,
  NgbModalRef,
  NgbModalOptions
} from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from '../../common/infoComponents/confirmation-modal.component';

@Component({
  selector: 'app-liturgie-bewerken',
  templateUrl: 'liturgie-bewerken.component.html'
})
export class LiturgieBewerkenComponent {
  @Input() liturgie: Liturgie;
  @Input() showSettings = true;
  @Input() enabled = true;
  @Output() saveLiturgie = new EventEmitter<Liturgie>();
  @Output() copyLiturgie = new EventEmitter<Liturgie>();
  @Output() deleteLiturgie = new EventEmitter<Liturgie>();

  constructor(private modalService: NgbModal) {}

  updateLiturgieNaam(title: string): void {
    this.liturgie.titel = title;
  }

  updateLiturgieDatum(datum: moment.Moment): void {
    this.liturgie.aanvangsDatum = datum;
  }

  save(): void {
    this.saveLiturgie.emit(this.liturgie);
  }

  dupliceer(): void {
    const confirmationModal = this.modalService.open(
      ConfirmationModalComponent
    );
    confirmationModal.result.then((result: boolean) => {
      if (result) {
        this.copyLiturgie.emit(this.liturgie);
      }
    });
  }

  confirmDeletion(): void {
    const confirmationModal = this.modalService.open(
      ConfirmationModalComponent
    );
    confirmationModal.componentInstance.type = 'danger';
    confirmationModal.componentInstance.inhoud = `
Weet je zeker dat je deze liturgie wilt verwijderen?
Niemand kan hem daarna meer inzien!`;
    confirmationModal.result.then((result: boolean) => {
      if (result) {
        this.deleteLiturgie.emit(this.liturgie);
      }
    });
  }
}
