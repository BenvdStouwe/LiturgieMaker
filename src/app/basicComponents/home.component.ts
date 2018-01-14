import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  private title: string;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.title = this.appService.getTitle();
  }
}
