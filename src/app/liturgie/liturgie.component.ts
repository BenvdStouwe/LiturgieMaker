import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Liturgie, ILiturgie } from './model/liturgie';
import { LiturgieService } from './services/liturgie.service';

@Component({
  selector: 'app-liturgie',
  templateUrl: 'liturgie.component.html'
})
export class LiturgieComponent implements OnInit {
  liturgie: Liturgie;
  loading = false;
  foutmelding: string;

  private id: number;

  constructor(
    private liturgieService: LiturgieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getLiturgie(this.id);
    });
  }

  verwijderFoutmelding(retry: boolean) {
    this.foutmelding = null;
    if (retry) {
      this.getLiturgie(this.id);
    }
  }

  private getLiturgie(id: number): void {
    this.loading = true;
    this.liturgieService.getLiturgie(id).subscribe(
      (liturgie: ILiturgie) => {
        this.loading = false;
        this.liturgie = new Liturgie(liturgie);
      },
      e => {
        this.loading = false;
        this.foutmelding = 'Fout bij ophalen van liturgie.';
      }
    );
  }
}
