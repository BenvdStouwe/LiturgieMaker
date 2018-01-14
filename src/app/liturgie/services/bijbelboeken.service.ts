import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BijbelboekenService {
  private bijbelBoekenApiUrl = 'http://online-bijbel.nl/api.php?p=';

  constructor(private http: Http) { }

  public getBijbelboek(id: number, hoofdstuk: number, verzen: number[]) {
    this.http.get(this.bijbelBoekenApiUrl)
      .subscribe(result => console.log(result));
  }
}

export class Bijbelboek {
  public id: number;
  public naam: string;

  public constructor(id: number, naam: string) {
    this.id = id;
    this.naam = naam;
  }
}
