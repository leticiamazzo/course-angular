import { Component } from '@angular/core';

import { Course } from '../course';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  // courses: Course[];

  // displayedColumns: string[];
  // columns: string[];

  constructor(private courseService: CoursesService) {
    // this.courses = [];
    // this.displayedColumns = ['id', 'name', 'actions'];
    // this.columns = ['ID', 'Curso', ''];
  }

  ngOnInit(): void {
    this.courseService
      .list()
      // Precisa se inscrever e ficar escutando as mudanças que vão ser enviadas por esse Observable
      // no subscriber pega o resultado (data, no caso) e atribui a variável courses
      // .subscribe(console.log);
      // .subscribe((data) => (this.courses = data));
  }
}
