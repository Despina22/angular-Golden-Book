import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorder]',
})
export class BorderDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('input') onInput() {
    const value = this.elementRef.nativeElement.value.trim();
    if (value === '') {
      this.elementRef.nativeElement.style.border = '2px solid red';
    } else {
      this.elementRef.nativeElement.style.border = '2px solid green';
    }
  }
}
