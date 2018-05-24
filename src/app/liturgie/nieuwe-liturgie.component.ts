import { Component, OnInit } from '@angular/core';

import { RoutingNames } from '../common/model/routingnames';
import { Liturgie, ILiturgie } from './model/liturgie';
import { LiturgieService } from './services/liturgie.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpResponseCode } from '../common/model/httpresponsecode';

@Component({
  selector: 'app-nieuwe-liturgie',
  templateUrl: 'nieuwe-liturgie.component.html'
})
export class NieuweLiturgieComponent implements OnInit {
  liturgie: Liturgie;
  routingNames = RoutingNames;

  loading = false;
  retry = true;
  foutmelding: string;

  constructor(
    private liturgieService: LiturgieService,
    private router: Router
  ) {}

  ngOnInit() {
    this.liturgie = this.getLocalLiturgie();
  }

  verwijderFoutmelding(retry: boolean) {
    this.foutmelding = null;
    if (retry) {
      this.verstuurLiturgie();
    }
  }

  verstuurLiturgie() {
    this.loading = true;
    this.liturgieService.postLiturgie(this.liturgie).subscribe(
      (liturgie: ILiturgie) => {
        this.loading = false;
        this.liturgieService.verwijderNietVerstuurdeLiturgie();
        this.router.navigate([RoutingNames.LITURGIE, liturgie.id]);
      },
      (e: HttpErrorResponse) => {
        this.onError(e);
      }
    );
  }

  private onError(error: HttpErrorResponse) {
    this.loading = false;
    if (error.status === HttpResponseCode.BadRequest) {
      this.retry = false;
      this.foutmelding = error.error;
    } else {
      this.retry = true;
      this.foutmelding =
        'Er is iets fout gegaan bij het versturen van de liturgie.';
    }
  }

  private getLocalLiturgie(): Liturgie {
    return this.liturgieService.getNietVerstuurdeLiturgie();
  }
}
