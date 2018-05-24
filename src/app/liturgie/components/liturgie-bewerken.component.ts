import { Component, Input } from '@angular/core';
import * as moment from 'moment';

import { Liturgie } from '../model/liturgie';

@Component({
  selector: 'app-liturgie-bewerken',
  templateUrl: 'liturgie-bewerken.component.html'
})
export class LiturgieBewerkenComponent {
  @Input() liturgie: Liturgie;
  @Input() enabled: boolean;

  updateLiturgieNaam(title: string): void {
    this.liturgie.titel = title;
  }

  updateLiturgieDatum(datum: moment.Moment): void {
    this.liturgie.aanvangsDatum = datum;
  }

  // updateLiturgieTijd(tijd: number): void {
  //   this.liturgie.aanvangsDatum.setTime(tijd);
  // }
}
