import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Bijbelboek } from '../model/bijbelboek';

@Injectable()
export class BijbelboekenService {
  private bijbelBoekenApiUrl = 'http://online-bijbel.nl/api.php?p=';
  private bijbelboeken: Bijbelboek[] = new Array<Bijbelboek>();

  constructor(private http: HttpClient) {
    this.setBijbelboeken();
  }

  public getBijbelboeken(): Bijbelboek[] {
    return this.bijbelboeken;
  }

  public getBijbelboekTekst(id: number, hoofdstuk: number, verzen: number[]) {
    this.http.get(`${this.bijbelBoekenApiUrl}`)
      .subscribe(result => console.log(result));
  }

  private setBijbelboeken() {
    const bijbelboekNamen = [
      'Genesis', 'Exodus', 'Leviticus', 'Numeri', 'Deuteronomium', 'Jozua', 'Richteren', 'Ruth', '1 Samuël', '2 Samuël', '1 Koningen',
      '2 Koningen', '1 Kronieken', '2 Kronieken', 'Ezra', 'Nehemia', 'Esther', 'Job', 'Psalmen', 'Spreuken', 'Prediker', 'Hooglied',
      'Jesaja', 'Jeremia', 'Klaagliederen', 'Ezechiël', 'Daniël', 'Hosea', 'Joël', 'Amos', 'Obadja', 'Jona', 'Micha', 'Nahum', 'Habakuk',
      'Sefanja', 'Haggai', 'Zacharia', 'Maleachi',

      'Mattheüs', 'Markus', 'Lukas', 'Johannes', 'Handelingen', 'Romeinen', '1 Korintiërs', '2 Korintiërs', 'Galaten', 'Efeziërs',
      'Filippenzen', 'Kolossenzen', '1 Tessalonicenzen', '2 Tessalonicenzen', '1 Timotheës', '2 Timotheës', 'Titus', 'Filemon',
      'Hebreeën', 'Jakobus', '1 Petrus', '2 Petrus', '1 Johannes', '2 Johannes', '3 Johannes', 'Judas', 'Openbaring',
    ];

    for (const bijbelboekNaam of bijbelboekNamen) {
      this.bijbelboeken.push(new Bijbelboek(bijbelboekNaam));
    }
  }
}
