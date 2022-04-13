import { Component } from '@angular/core';

import { Course } from '../course';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  courses: Course[];

  columns = [
    {
      columnDef: 'id',
      header: 'No.',
      cell: (element: Course) => `${element.id}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Course) => `${element.name}`,
    },
  ];

  displayedColumns = this.columns.map((c) => c.columnDef);

  constructor(private courseService: CoursesService) {
    this.courses = [];
  }

  ngOnInit(): void {
    this.courseService
      .list()
      // Precisa se inscrever e ficar escutando as mudanças que vão ser enviadas por esse Observable
      // no subscriber pega o resultado (data, no caso) e atribui a variável courses
      .subscribe((data) => (this.courses = data));
  }
}