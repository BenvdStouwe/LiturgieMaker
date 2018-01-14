import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {
  title: string;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.title = this.appService.getTitle();
  }
}
