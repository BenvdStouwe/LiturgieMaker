import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';
import { RoutingNames } from './model/routingnames';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
  title: string;
  isNavbarCollapsed = true;
  routingNames = RoutingNames;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.title = this.appService.getTitle();
  }
}
