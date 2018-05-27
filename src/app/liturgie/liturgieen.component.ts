import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  OnDestroy
} from '@angular/core';

import { RoutingNames } from '../common/model/routingnames';
import { ILiturgie, Liturgie } from './model/liturgie';
import { LiturgieService } from './services/liturgie.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-liturgieen',
  templateUrl: 'liturgieen.component.html'
})
export class LiturgieenComponent implements OnInit {
  liturgieenPerPagina = 20;

  laadtLiturgieen = false;
  liturgieen: Liturgie[];
  aantalLiturgieen: number;
  routingNames = RoutingNames;

  page: number;
  foutmelding: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private liturgieService: LiturgieService
  ) {}

  ngOnInit() {
    this.getAantalLiturgieen();
    this.route.params.subscribe(params => {
      this.page = +params['page'] > 0 ? +params['page'] : 1;
      this.getLiturgieen();
    });
  }

  getAantalLiturgieen() {
    this.liturgieService.getAantalLiturgieen().subscribe((aantal: number) => {
      this.aantalLiturgieen = aantal;
    });
  }

  getLiturgieen() {
    this.laadtLiturgieen = true;
    this.liturgieService
      .getLiturgieen(this.page, this.liturgieenPerPagina)
      .subscribe(
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

  switchPage(page: number) {
    this.page = page;
    this.getLiturgieen();
    const url = ['', this.routingNames.LITURGIEEN, this.page].join('/');
    // location.go changes the url without navigating to it.
    // This is useful when the user goes back to this page, it'll be on the page where they left.
    this.location.go(url);
  }

  verwijderFoutmelding(retry: boolean) {
    this.foutmelding = null;
    if (retry) {
      this.getLiturgieen();
    }
  }
}
