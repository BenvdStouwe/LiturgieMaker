import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
<ngb-alert *ngIf="visible" type="info"
  [dismissible]="false">
<i class="fa fa-spin fa-refresh"
aria-hidden="true"></i> {{tekst}}
</ngb-alert>`
})
export class LoaderComponent implements OnInit {
  @Input() tekst: string;
  visible = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.visible = true;
    }, 500);
  }
}
