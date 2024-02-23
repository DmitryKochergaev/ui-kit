import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {

  constructor(private el: ElementRef) {
    console.log('elRef', el);
  }

}
