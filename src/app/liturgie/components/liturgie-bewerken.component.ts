import { Component, Input } from '@angular/core';

import { Liturgie } from '../model/liturgie';

@Component({
  selector: 'app-liturgie-bewerken',
  templateUrl: 'liturgie-bewerken.component.html'
})
export class LiturgieBewekrenComponent {
  @Input() liturgie: Liturgie;

  updateLiturgieNaam(title: string): void {
    this.liturgie.titel = title;
  }

  updateLiturgieDatum(datum: Date): void {
    this.liturgie.aanvangsDatum = datum;
  }

  updateLiturgieTijd(tijd: number): void {
    this.liturgie.aanvangsDatum.setTime(tijd);
  }
}
