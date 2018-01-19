import { Directive, ElementRef, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements OnChanges {
  @Input() appAutofocus: boolean;

  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appAutofocus'] && this.appAutofocus) {
      this.el.nativeElement.focus();
    }
  }
}
