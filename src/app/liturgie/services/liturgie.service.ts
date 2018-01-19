import { Injectable } from '@angular/core';

import { Liturgie } from '../model/liturgie';

@Injectable()
export class LiturgieService {
  private liturgie: Liturgie;

  public getLiturgie(): Liturgie {
    if (!this.liturgie) {
      this.liturgie = new Liturgie('Nieuwe liturgie', new Date());
    }
    return this.liturgie;
  }

  // private getLiturgieFromStorage(): Liturgie {
  //   const liturgie: Liturgie = window.localStorage.getItem('appLocalLiturgie');

  //   return liturgie;
  // }
}
