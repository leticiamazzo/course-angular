import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  vegetables: string[] = ['abobrinha', 'berinjela', 'brócolis'];
  cityImage: string = 'http://lorempixel.com/400/200/city/';
  actualValue: string = '';
  savedValue: string = '';
  isMouseOver: boolean = false;
  courseName: string = 'Angular';
  defaultValue: number = 15;

  getValue() {
    return 1;
  }

  clickButton() {
    alert('Clicou no botão');
  }

  onKeyUp(event) {
    this.actualValue = event.target.value;
  }

  save(batatinha) {
    this.savedValue = batatinha;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onChangedValue(event) {
    console.log(event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
