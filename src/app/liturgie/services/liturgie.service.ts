import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { ILiturgie, Liturgie } from '../model/liturgie';
import { ILiturgieItem } from '../model/liturgie-item';

@Injectable()
export class LiturgieService {
  private url = `${environment.apiUrl}/liturgie`;
  private nietVerstuurdeLiturgie: Liturgie;

  constructor(private http: HttpClient) {}

  getNietVerstuurdeLiturgie(): Liturgie {
    if (!this.nietVerstuurdeLiturgie) {
      this.nietVerstuurdeLiturgie = new Liturgie(<ILiturgie>{
        titel: 'Nieuwe liturgie',
        aanvangsDatum: new Date(),
        publicatieDatum: new Date(),
        items: new Array<ILiturgieItem>()
      });
    }
    return this.nietVerstuurdeLiturgie;
  }

  getVoorbeeldLiturgie(): Liturgie {
    return new Liturgie(<ILiturgie>{
      titel: 'Jouw liturgie',
      aanvangsDatum: new Date(),
      publicatieDatum: new Date(),
      items: new Array<ILiturgieItem>()
    });
  }

  getLiturgie(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  getLiturgieen() {
    return this.http.get(this.url);
  }
}
