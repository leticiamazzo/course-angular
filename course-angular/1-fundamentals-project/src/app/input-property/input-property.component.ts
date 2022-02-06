import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {
  // expõe a propriedade name para o app-course
  @Input() name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
