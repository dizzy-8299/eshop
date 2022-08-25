import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appNext]',
})
export class NextDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  @HostListener('click')
  nextfunc() {
    console.log(this.el.nativeElement.parentElement.parentElement.children[0]);
    let element = this.el.nativeElement.parentElement.parentElement.children[0];
    let item = element.getElementsByClassName('item');
    console.log(item);
    this.renderer.appendChild(element, item[0]);
  }
}
