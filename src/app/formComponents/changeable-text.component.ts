import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ChangeableValue } from './changeable-value';

@Component({
  selector: 'app-changeable-text',
  templateUrl: 'changeable-text.component.html',
  styleUrls: ['changeable-value.css']
})

export class ChangeableTextComponent extends ChangeableValue {
  @Input() value: string;
  @Output() changedValue = new EventEmitter<string>();
}
