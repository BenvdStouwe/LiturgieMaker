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

  constructor(
    private bijbelboekService: BijbelboekenService,
    private liturgieService: LiturgieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.url.subscribe(result => {
      if (result.some(u => u.path === 'voorbeeld')) {
        this.isExample = true;
        this.setVoorbeeldLiturgie();
      } else {
        this.liturgie = this.getLiturgie();
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

  private getLiturgie(): Liturgie {
    return this.liturgieService.getNietVerstuurdeLiturgie();
  }

  private resetLirgie(): void {
    this.liturgie = new Liturgie('Nieuwe liturgie', new Date());
  }

  private setVoorbeeldLiturgie(): void {
    this.liturgie = new Liturgie('Jouw liturgie', new Date());
  }
}
