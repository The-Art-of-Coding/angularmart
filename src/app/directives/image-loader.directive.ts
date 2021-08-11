import {Directive, HostListener, ElementRef, Input, HostBinding} from '@angular/core';

// HostListener - Allows us to listen to events on the element on which directive is used.
// ElementRef - Allows to access the element on which directive is used
@Directive({
  selector: '[custLoader]'
})
export class ImageLoaderDirective {
  // Directives has 2 syntax:
  // 1. With Data
  //     <img src="/something" custLoader="someData"
  // 2. Without Data
  //      syntax:
  //        <img src="/something" custLoader


  @Input() custLoader!: string;
  constructor(private elementRef: ElementRef) { }

  @HostListener('error')
  handleImageLoadError(){
    const imgEl = this.elementRef.nativeElement as HTMLImageElement;
    imgEl.src = this.custLoader || '/assets/images/error.png';
  }

  @HostBinding('class.highlighted') isHovered: boolean = false;

  @HostListener('mouseout')
  removeBorder(){
    this.isHovered = false;
  }

  @HostListener('mouseover')
  addBorder(){
    this.isHovered = true;
  }

}
