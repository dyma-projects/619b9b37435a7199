import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  constructor(private el: ElementRef) {
    console.log('dedans', this.el);
  }

  @HostListener('window:keydown', ['$event']) private windowClick(
    event: KeyboardEvent
  ) {
    console.log('dedans event : ', event.key);

    if (event.key === 'ArrowDown') this.changeColorDirection('black');

    if (event.key === 'ArrowLeft') this.changeColorDirection('red');

    if (event.key === 'ArrowRight') this.changeColorDirection('yellow');

    if (event.key === 'ArrowUp') this.changeColorDirection('blue');
  }

  private changeColorDirection(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
