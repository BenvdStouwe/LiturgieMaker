import { EventEmitter, Input, Output } from '@angular/core';

export abstract class ChangeableValue {
  @Input() value: any;
  @Input() placeholderText: string;
  @Output() changedValue: EventEmitter<any>;
  public changeMode = false;
  public tooltipText = 'Klik om aan te passen';

  public switchChangeMode(): void {
    this.changeMode = !this.changeMode;

    if (!this.changeMode) {
      this.changedValue.emit(this.value);
    }
  }
}
