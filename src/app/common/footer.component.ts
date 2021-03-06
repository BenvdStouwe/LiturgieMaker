import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { RoutingNames } from './model/routingnames';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html'
})
export class FooterComponent implements OnInit {
  title: string;
  routingNames = RoutingNames;
  private startingYear: number;
  private currentYear: number;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.title = this.appService.getTitle();
    this.startingYear = this.appService.getStartingYear();
    this.currentYear = new Date().getFullYear();
  }

  getYears(): string {
    return this.startingYear === this.currentYear
      ? this.startingYear.toString()
      : this.startingYear.toString() + ' - ' + this.currentYear.toString();
  }
}
