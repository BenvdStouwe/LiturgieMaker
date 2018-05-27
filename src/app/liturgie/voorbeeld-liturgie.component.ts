import { Component, OnInit } from '@angular/core';

import { Liturgie } from './model/liturgie';
import { LiturgieService } from './services/liturgie.service';
import { RoutingNames } from '../common/model/routingnames';

@Component({
  selector: 'app-voorbeeld-liturgie',
  templateUrl: 'voorbeeld-liturgie.component.html'
})
export class VoorbeeldLiturgieComponent implements OnInit {
  liturgie: Liturgie;
  routingNames = RoutingNames;

  constructor(private liturgieService: LiturgieService) {}

  ngOnInit() {
    this.setVoorbeeldLiturgie();
  }

  private setVoorbeeldLiturgie(): void {
    this.liturgie = this.liturgieService.getVoorbeeldLiturgie();
  }
}
