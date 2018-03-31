import { Component, OnInit } from '@angular/core';

import { Liturgie } from './model/liturgie';
import { LiturgieService } from './services/liturgie.service';

@Component({
  selector: 'app-liturgieen',
  templateUrl: 'liturgieen.component.html'
})
export class LiturgieenComponent implements OnInit {
  laadtLiturgieen = false;
  liturgieen: Liturgie[];

  constructor(private liturgieService: LiturgieService) {}

  ngOnInit() {
    this.getLiturgieen();
  }

  getLiturgieen() {
    this.laadtLiturgieen = true;
    this.liturgieService.getLiturgieen().subscribe(
      (liturgieen: Liturgie[]) => {
        this.laadtLiturgieen = false;
        this.liturgieen = liturgieen;
      },
      e =>
        alert(
          'Er is iets fout gegaan bij het ophalen van je liturgieen, probeer het later opnieuw.'
        )
    );
  }
}
