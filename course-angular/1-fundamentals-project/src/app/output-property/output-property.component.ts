import { Component, Input, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
  @Input() initialValue: number = 0;
  @Output() changedValue = new EventEmitter();
  // esse output vai emitir um evento customizado para que o componente pai, ou seja, que está usando o contador, possa capturar o evento e realizar alguma lógica necessária

  // @ViewChild('inputCamp') inputCampValue: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  subtract() {
    // usado com o viewChild
    // this.inputCampValue.nativeElement.value --;

    this.initialValue--;
    this.changedValue.emit(this.initialValue);
  }

  add() {
    // usado com o viewChild
    // this.inputCampValue.nativeElement.value ++;

    this.initialValue++;
    this.changedValue.emit(this.initialValue);
  }
}
