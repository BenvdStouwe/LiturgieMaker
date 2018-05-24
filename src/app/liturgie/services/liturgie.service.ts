import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { ILiturgie, Liturgie } from '../model/liturgie';
import { ILiturgieItem } from '../model/liturgie-item';
import * as moment from 'moment';

@Injectable()
export class LiturgieService {
  private url = `${environment.apiUrl}/liturgie`;
  private nietVerstuurdeLiturgie: Liturgie;

  constructor(private http: HttpClient) {}

  getNietVerstuurdeLiturgie(): Liturgie {
    if (!this.nietVerstuurdeLiturgie) {
      this.nietVerstuurdeLiturgie = new Liturgie(<ILiturgie>{
        titel: 'Nieuwe liturgie',
        aanvangsDatum: moment(),
        publicatieDatum: moment(),
        items: new Array<ILiturgieItem>()
      });
    }
    return this.nietVerstuurdeLiturgie;
  }

  getVoorbeeldLiturgie(): Liturgie {
    return new Liturgie(<ILiturgie>{
      titel: 'Jouw liturgie',
      aanvangsDatum: moment(),
      publicatieDatum: moment(),
      items: new Array<ILiturgieItem>()
    });
  }

  getLiturgie(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  getLiturgieen() {
    return this.http.get(this.url);
  }

  postLiturgie(liturgie: Liturgie) {
    return this.http.post(this.url, liturgie);
  }

  verwijderNietVerstuurdeLiturgie() {
    this.nietVerstuurdeLiturgie = null;
  }
}
