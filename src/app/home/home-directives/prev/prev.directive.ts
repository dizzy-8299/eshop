import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appPrev]',
})
export class PrevDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  @HostListener('click')
  prevfunc() {
    let element = this.el.nativeElement.parentElement.parentElement.children[0];
    let item = element.getElementsByClassName('item');
    console.log(item);
    //element.prepend(item[item.length - 1]);
    this.renderer.insertBefore(element, item[item.length - 1], item[0]);
  }
}
