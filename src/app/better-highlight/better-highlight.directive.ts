import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false, false);
  }

  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent', false, false);
  }

}
