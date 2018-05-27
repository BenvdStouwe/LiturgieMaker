import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Liturgie, ILiturgie } from './model/liturgie';
import { LiturgieService } from './services/liturgie.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpResponseCode } from '../common/model/httpresponsecode';
import { RoutingNames } from '../common/model/routingnames';

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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getLiturgie(this.id);
    });
  }

  updateLiturgie() {
    this.loading = true;
    this.liturgieService
      .updateBestaandeLiturgie(this.liturgie)
      .subscribe((e: HttpErrorResponse) => {
        this.loading = false;
        if (e !== null) {
          switch (e.status) {
            case HttpResponseCode.BadRequest:
            case HttpResponseCode.NotFound:
            case HttpResponseCode.Forbidden:
              this.foutmelding = e.error;
              break;
            case HttpResponseCode.NoContent:
              break;
            default:
              this.foutmelding =
                'Er is iets fout gegaan bij het opslaan van de liturgie.';
              break;
          }
        }
      });
  }

  dupliceerLiturgie() {
    this.loading = true;
    const liturgieKopie = new Liturgie(this.liturgie);
    liturgieKopie.id = null;
    this.liturgieService.verstuurNieuweLiturgie(liturgieKopie).subscribe(
      (nieuweLiturgie: ILiturgie) => {
        this.router.navigate([RoutingNames.LITURGIE, nieuweLiturgie.id]);
      },
      (e: HttpErrorResponse) => {
        this.loading = false;
        if (e !== null) {
          switch (e.status) {
            case HttpResponseCode.BadRequest:
            case HttpResponseCode.NotFound:
            case HttpResponseCode.Forbidden:
              this.foutmelding = e.error;
              break;
            default:
              this.foutmelding =
                'Er is iets fout gegaan bij het opslaan van de liturgie.';
              break;
          }
        }
      }
    );
  }

  verwijderLiturgie() {
    this.loading = true;
    this.liturgieService
      .verwijderBestaandeLiturgie(this.liturgie)
      .subscribe((e: HttpErrorResponse) => {
        this.loading = false;
        if (e !== null) {
          switch (e.status) {
            case HttpResponseCode.BadRequest:
            case HttpResponseCode.NotFound:
            case HttpResponseCode.Forbidden:
              this.foutmelding = e.error;
              break;
            case HttpResponseCode.NoContent:
              this.router.navigate([RoutingNames.LITURGIEEN]);
              break;
            default:
              this.foutmelding =
                'Er is iets fout gegaan bij het verwijderen van de liturgie.';
              break;
          }
        } else {
          this.router.navigate([RoutingNames.LITURGIEEN]);
        }
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
      (e: HttpErrorResponse) => {
        this.loading = false;
        this.foutmelding = e.error ? e.error : 'Fout bij ophalen van liturgie.';
      }
    );
  }
}
