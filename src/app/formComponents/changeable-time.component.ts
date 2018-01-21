import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ChangeableValue } from './changeable-value';
import { Time } from '@angular/common';

@Component({
  selector: 'app-changeable-time',
  templateUrl: 'changeable-time.component.html',
  styleUrls: ['changeable-value.css']
})

export class ChangeableTimeComponent extends ChangeableValue {
  @Input() value: Time;
  @Output() changedValue = new EventEmitter<Time>();

  public setTime(time: any): void {
    console.log(time);
  }
}
