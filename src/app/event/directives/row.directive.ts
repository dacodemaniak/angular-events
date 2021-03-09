import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[evRow]'
})
export class RowDirective implements OnInit {

  @Input('evRow') color: string = '#d6d6d6';

  constructor(
    private elementRef: ElementRef
  ) { }

  @HostListener('mouseenter') applyBackground() {
    this.setBackground(this.color);
  }

  @HostListener('mouseleave') removeBackground() {
    this.setBackground(null);
  }

  ngOnInit(): void {

  }

  private setBackground(color: string): void {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
