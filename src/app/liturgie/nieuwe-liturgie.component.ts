import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RoutingNames } from '../common/model/routingnames';
import { Liturgie } from './model/liturgie';
import { BijbelboekenService } from './services/bijbelboeken.service';
import { LiturgieService } from './services/liturgie.service';

@Component({
  selector: 'app-nieuwe-liturgie',
  templateUrl: 'nieuwe-liturgie.component.html'
})
export class NieuweLiturgieComponent implements OnInit {
  isExample: boolean;
  liturgie: Liturgie;
  routingNames = RoutingNames;

  loading = false;
  foutmelding: string;

  constructor(
    private bijbelboekService: BijbelboekenService,
    private liturgieService: LiturgieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.url.subscribe(result => {
      if (result.some(u => u.path === RoutingNames.VOORBEELD)) {
        this.isExample = true;
        this.setVoorbeeldLiturgie();
      } else if (result.some(u => u.path === RoutingNames.LITURGIE)) {
        const id = +result['id'];
        this.getLiturige(id);
      } else {
        this.liturgie = this.getLocalLiturgie();
      }
    });
  }

  updateLiturgieNaam(title: string): void {
    this.liturgie.titel = title;
  }

  updateLiturgieDatum(datum: Date): void {
    this.liturgie.aanvangsDatum = datum;
  }

  updateLiturgieTijd(tijd: number): void {
    this.liturgie.aanvangsDatum.setTime(tijd);
  }

  private getLiturige(id: number): void {
    this.loading = true;
    this.liturgieService.getLiturgie(id).subscribe(
      (liturgie: Liturgie) => {
        this.loading = false;
        this.liturgie = liturgie;
      },
      e => {
        this.foutmelding = 'Fout bij ophalen van liturgie';
      }
    );
  }

  private getLocalLiturgie(): Liturgie {
    return this.liturgieService.getNietVerstuurdeLiturgie();
  }

  private setVoorbeeldLiturgie(): void {
    this.liturgie = new Liturgie('Jouw liturgie', new Date());
  }

  verwijderFoutmelding() {
    this.foutmelding = null;
  }
}
