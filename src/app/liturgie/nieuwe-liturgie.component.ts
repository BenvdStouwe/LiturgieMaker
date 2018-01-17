import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Liturgie } from './model/liturgie';
import { BijbelboekenService } from './services/bijbelboeken.service';

@Component({
  selector: 'app-nieuwe-liturgie',
  templateUrl: 'nieuwe-liturgie.component.html'
})

export class NieuweLiturgieComponent implements OnInit {
  public isExample: boolean;
  public liturgie: Liturgie;

  constructor(private bijbelboekService: BijbelboekenService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe(result => {
      if (result.some(u => u.path === 'voorbeeld')) {
        this.isExample = true;
        this.setVoorbeeldLiturgie();
      }
    });
  }

  private setVoorbeeldLiturgie(): void {
    this.liturgie = new Liturgie('Jouw liturgie', new Date());
  }
}
