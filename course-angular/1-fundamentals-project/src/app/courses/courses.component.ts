import { Component, OnInit } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService] // usaria se quisesse que o serviço fosse acessado por esse único componente
})
export class CoursesComponent implements OnInit {
  title: string;
  courses: string[];

  constructor(private courseService: CoursesService) {
    this.title = 'angular-loiane-leticia';
  }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();

    // se inscreve nesse emissor de eventos e sempre será notificado quando ele emitir um novo valor. pensar no subscribe como uma inscrição em um canal no youtube. quando sobre um vídeo novo, ou seja, update, recebe notificação
    CoursesService.createNewCourse.subscribe(
      course => this.courses.push(course)
    );
  }

}
