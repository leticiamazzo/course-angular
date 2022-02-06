import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ng-style',
  templateUrl: './directive-ng-style.component.html',
  styleUrls: ['./directive-ng-style.component.css']
})
export class DirectiveNgStyleComponent implements OnInit {
  active: boolean = false;
  fontSize: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

  changeActive() {
    this.active = !this.active;
  }

}
