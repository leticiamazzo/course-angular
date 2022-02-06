import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elvis-operator',
  templateUrl: './elvis-operator.component.html',
  styleUrls: ['./elvis-operator.component.css']
})
export class ElvisOperatorComponent implements OnInit {
  task: any = {
    description: 'Descrição da tarefa',
    creator: null,
    user:
      {
        first: 'Ana'
      }
    // creator: { name: 'Leticia' }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
