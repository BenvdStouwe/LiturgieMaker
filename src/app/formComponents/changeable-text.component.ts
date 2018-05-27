import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ChangeableValue } from './changeable-value';

@Component({
  selector: 'app-changeable-text',
  templateUrl: 'changeable-text.component.html',
  styleUrls: ['changeable-value.css']
})
export class ChangeableTextComponent extends ChangeableValue {
  @Input() value: string;
  @Input() defaultValue = 'Lorem ipsum';
  @Output() changedValue = new EventEmitter<string>();

  switchChangeMode(): void {
    if (!this.canChangeMode()) {
      return;
    }

    // Text value should not be empty.
    if (!this.value) {
      this.value = this.defaultValue;
    }
    super.switchChangeMode();
  }
}
