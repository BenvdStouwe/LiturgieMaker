import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ChangeableValue } from './changeable-value';

@Component({
  selector: 'app-changeable-date',
  templateUrl: 'changeable-date.component.html',
  styleUrls: ['changeable-value.css']
})

export class ChangeableDateComponent extends ChangeableValue {
  @Input() value: Date;
  @Output() changedValue = new EventEmitter<Date>();
}
