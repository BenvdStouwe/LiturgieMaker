import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Liturgie } from '../model/liturgie';

@Injectable()
export class LiturgieService {
  private url = 'http://localhost:5000/api/liturgie';
  private liturgie: Liturgie;

  constructor(private http: HttpClient) { }

  public getLiturgie(): Liturgie {
    if (!this.liturgie) {
      this.liturgie = new Liturgie('Nieuwe liturgie', new Date());
    }
    return this.liturgie;
  }

  public getLiturgieen() {
    return this.http.get(this.url);
  }

  // private getLiturgieFromStorage(): Liturgie {
  //   const liturgie: Liturgie = window.localStorage.getItem('appLocalLiturgie');

  //   return liturgie;
  // }
}
