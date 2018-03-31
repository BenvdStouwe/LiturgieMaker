import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { RoutingNames } from './model/routingnames';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  title: string;
  routingNames = RoutingNames;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.title = this.appService.getTitle();
  }
}
