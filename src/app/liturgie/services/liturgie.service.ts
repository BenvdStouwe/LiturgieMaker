import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Liturgie } from '../model/liturgie';

@Injectable()
export class LiturgieService {
  private url = 'http://localhost:5000/api/liturgie';
  private nietVerstuurdeLiturgie: Liturgie;

  constructor(private http: HttpClient) {}

  getNietVerstuurdeLiturgie(): Liturgie {
    if (!this.nietVerstuurdeLiturgie) {
      this.nietVerstuurdeLiturgie = new Liturgie('Nieuwe liturgie', new Date());
    }
    return this.nietVerstuurdeLiturgie;
  }

  getLiturgie(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  getLiturgieen() {
    return this.http.get(this.url);
  }
}
