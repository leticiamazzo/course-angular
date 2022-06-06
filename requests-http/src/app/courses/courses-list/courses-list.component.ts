import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '../course';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  // courses$:courses: Course[];
  courses$: Observable<Course[]>;

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
      // .subscribe(data => this.courses = data);

      // subscribe e | async sevem pra se inscrever manualmente.
      // com subscribe sempre que se inscreve, também precisa desinscrever para não ficar consumindo memória sem necessidade, levando a problemas de performance e memory leaks. Funciona como inscrição em um serviço de streaming, onde cadastra cartão de crédito e é cobrado mensalmente (mesmo que não esteja usando) até que se desenscreva
      // benefício do | async é deixar o gerenciamento com o Angular
      this.courses$ = this.courseService.list( )


  }
}
