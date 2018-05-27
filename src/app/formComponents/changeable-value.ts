import { EventEmitter, Input, Output } from '@angular/core';

export abstract class ChangeableValue {
  @Input() value: any;
  @Input() placeholderText: string;
  @Input() enabled = true;
  @Output() changedValue: EventEmitter<any>;
  changeMode = false;

  canChangeMode(): boolean {
    return this.enabled;
  }

  switchChangeMode(): void {
    if (!this.canChangeMode()) {
      return;
    }

    this.changeMode = !this.changeMode;

    if (!this.changeMode) {
      this.changedValue.emit(this.value);
    }
  }
}
