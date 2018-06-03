import { Directive, Input, OnInit, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective implements OnInit{
  addClass = 'true';
  @Input('appDropdown') className: string;


  constructor(private elRef: ElementRef, private renderer: Renderer2){ }

  ngOnInit(){
  }

  @HostListener('click') mouseClick (eventData: Event){
    if (this.addClass){
      this.renderer.addClass(this.elRef.nativeElement, this.className);
      this.addClass = false;
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, this.className);
      this.addClass = true;
    }
  }

}
