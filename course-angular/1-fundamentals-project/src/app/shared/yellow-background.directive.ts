import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appYellowBackground]'
})
export class YellowBackgroundDirective {

  constructor(
    private _elementRef: ElementRef,
  ) { 
    // Documentação Angular não recomenda usar por vulnerabilidade
    this._elementRef.nativeElement.style.backgroundColor = "yellow";
  }

}
