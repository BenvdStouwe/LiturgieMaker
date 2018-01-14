import { Component, OnInit } from '@angular/core';

import { BijbelboekenService } from './services/bijbelboeken.service';

@Component({
  selector: 'app-nieuwe-liturgie',
  templateUrl: 'nieuwe-liturgie.component.html'
})

export class NieuweLiturgieComponent implements OnInit {
  constructor(private bijbelboekService: BijbelboekenService) { }

  ngOnInit() {
  }
}
