import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appInputGroup]',
})
export class InputGroupDirective {
  private el = inject(ElementRef);

  constructor() {}

  @HostListener('blur') onBlur() {
    this.labelUp();
  }

  private labelUp() {
    if (this.el.nativeElement.value.length > 0) {
      this.el.nativeElement.nextElementSibling.style.top = '2px';
    } else {
      this.el.nativeElement.nextElementSibling.style.top = '';
    }
  }
}
