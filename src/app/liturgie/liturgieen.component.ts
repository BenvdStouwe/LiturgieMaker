import { Component, OnInit } from '@angular/core';

import { RoutingNames } from '../common/model/routingnames';
import { ILiturgie, Liturgie } from './model/liturgie';
import { LiturgieService } from './services/liturgie.service';

@Component({
  selector: 'app-liturgieen',
  templateUrl: 'liturgieen.component.html'
})
export class LiturgieenComponent implements OnInit {
  laadtLiturgieen = false;
  liturgieen: Liturgie[];
  routingNames = RoutingNames;

  foutmelding: string;

  constructor(private liturgieService: LiturgieService) {}

  ngOnInit() {
    this.getLiturgieen();
  }

  getLiturgieen() {
    this.laadtLiturgieen = true;
    this.liturgieService.getLiturgieen().subscribe(
      (liturgieDtos: ILiturgie[]) => {
        this.laadtLiturgieen = false;
        this.liturgieen = liturgieDtos.map(l => new Liturgie(l));
      },
      e => {
        this.laadtLiturgieen = false;
        this.foutmelding =
          'Er is iets fout gegaan bij het ophalen van de liturgieen.';
      }
    );
  }

  gepubliceerd(publicatiedatum: Date): boolean {
    return publicatiedatum <= new Date();
  }

  verwijderFoutmelding(retry: boolean) {
    this.foutmelding = null;
    if (retry) {
      this.getLiturgieen();
    }
  }
}
