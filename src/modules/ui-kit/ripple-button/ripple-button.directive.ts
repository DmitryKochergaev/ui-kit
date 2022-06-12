import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[rippleButton]'
})
export class RippleButtonDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log('el', el);
  }

  @HostListener('click', ['$event'])
  private onClick(e: PointerEvent): void {
    this.onAnimationend();
    const { offsetX, offsetY } = e;
    this.renderer.setStyle(this.el.nativeElement, '--x', offsetX + 'px', 2);
    this.renderer.setStyle(this.el.nativeElement, '--y', offsetY + 'px', 2);
    this.renderer.addClass(this.el.nativeElement, 'animate');

  }

  @HostListener('animationend')
  private onAnimationend(): void {
    this.renderer.removeClass(this.el.nativeElement, 'animate');
  }

}
