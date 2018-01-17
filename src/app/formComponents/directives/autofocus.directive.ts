import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements OnInit {
  @Input() appAutofocus = false;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    if (this.appAutofocus) {
      this.el.nativeElement.focus();
    }
  }

  @Input() set autofocus(condition: boolean) {
    this.appAutofocus = condition !== false;
  }
}
