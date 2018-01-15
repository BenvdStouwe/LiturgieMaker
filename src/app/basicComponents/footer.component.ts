import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css']
})

export class FooterComponent implements OnInit {
  private title: string;
  private startingYear: number;
  private currentYear: number;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.title = this.appService.getTitle();
    this.startingYear = this.appService.getStartingYear();
    this.currentYear = new Date().getFullYear();
  }

  private getYears(): string {
    return this.startingYear === this.currentYear
      ? this.startingYear.toString()
      : this.startingYear.toString() + ' - ' + this.currentYear.toString();
  }
}
