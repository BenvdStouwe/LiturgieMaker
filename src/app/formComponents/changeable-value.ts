import { EventEmitter, Input, Output } from '@angular/core';

export abstract class ChangeableValue {
  @Input() value: any;
  @Input() placeholderText: string;
  @Output() changedValue: EventEmitter<any>;
  changeMode = false;
  tooltipText = 'Klik om aan te passen';

  switchChangeMode(): void {
    this.changeMode = !this.changeMode;

    if (!this.changeMode) {
      this.changedValue.emit(this.value);
    }
  }
}
