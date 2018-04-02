import { Component, OnInit } from '@angular/core';

import { Liturgie } from './model/liturgie';

@Component({
  selector: 'app-voorbeeld-liturgie',
  templateUrl: 'voorbeeld-liturgie.component.html'
})
export class VoorbeeldLiturgieComponent implements OnInit {
  liturgie: Liturgie;

  ngOnInit() {
    this.setVoorbeeldLiturgie();
  }

  private setVoorbeeldLiturgie(): void {
    this.liturgie = new Liturgie('Jouw liturgie', new Date());
  }
}
