import { Time } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ChangeableValue } from './changeable-value';

@Component({
  selector: 'app-changeable-time',
  templateUrl: 'changeable-time.component.html',
  styleUrls: ['changeable-value.css']
})
export class ChangeableTimeComponent extends ChangeableValue {
  @Input() value: Time;
  @Output() changedValue = new EventEmitter<Time>();

  setTime(time: any): void {
    console.log(time);
  }

  getTime(): string {
    return `${this.value.hours}:${this.value.minutes}`;
  }

  activateChangeMode(): void {
    console.log('ChangeMode gaan AAN!');
    this.changeMode = true;
  }

  switchChangeMode(): void {
    if (!this.value) {
      this.value = <Time>{ hours: 9, minutes: 30 };
    }
    super.switchChangeMode();
  }
}
