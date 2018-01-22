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

  public getTime(): string {
    return `${this.value.hours}:${this.value.minutes}`;
  }

  public activateChangeMode(): void {
    console.log('ChangeMode gaan AAN!');
    this.changeMode = true;
  }

  public switchChangeMode(): void {
    if (!this.value) {
      this.value = <Time>{ hours: 9, minutes: 30 };
    }
    super.switchChangeMode();
  }
}
