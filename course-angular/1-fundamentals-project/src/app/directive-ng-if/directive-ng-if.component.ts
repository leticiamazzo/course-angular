import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-ng-if',
  templateUrl: './directive-ng-if.component.html',
  styleUrls: ['./directive-ng-if.component.css']
})
export class DirectiveNgIfComponent implements OnInit {
  cursos: string[] = [];
  hasCourses: boolean = false;
  activeIcon: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  click() {
    this.hasCourses = !this.hasCourses
  }

  favorite() {
    this.activeIcon = !this.activeIcon;
  }
}
