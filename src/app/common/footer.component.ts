import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { RoutingNames } from './model/routingnames';


@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css']
})

export class FooterComponent implements OnInit {
  public title: string;
  public routingNames = RoutingNames;
  private startingYear: number;
  private currentYear: number;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.title = this.appService.getTitle();
    this.startingYear = this.appService.getStartingYear();
    this.currentYear = new Date().getFullYear();
  }

  public getYears(): string {
    return this.startingYear === this.currentYear
      ? this.startingYear.toString()
      : this.startingYear.toString() + ' - ' + this.currentYear.toString();
  }
}
