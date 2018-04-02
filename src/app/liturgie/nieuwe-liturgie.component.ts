import { Component, OnInit } from '@angular/core';

import { RoutingNames } from '../common/model/routingnames';
import { Liturgie } from './model/liturgie';
import { LiturgieService } from './services/liturgie.service';

@Component({
  selector: 'app-nieuwe-liturgie',
  templateUrl: 'nieuwe-liturgie.component.html'
})
export class NieuweLiturgieComponent implements OnInit {
  liturgie: Liturgie;
  routingNames = RoutingNames;

  loading = false;
  foutmelding: string;

  constructor(private liturgieService: LiturgieService) {}

  ngOnInit() {
    this.liturgie = this.getLocalLiturgie();
  }

  verwijderFoutmelding() {
    this.foutmelding = null;
  }

  private getLocalLiturgie(): Liturgie {
    return this.liturgieService.getNietVerstuurdeLiturgie();
  }
}
