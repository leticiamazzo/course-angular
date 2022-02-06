import { CoursesService } from './../courses/courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-course-receive',
  templateUrl: './create-course-receive.component.html',
  styleUrls: ['./create-course-receive.component.css']
})
export class CreateCourseReceiveComponent implements OnInit {
  course: string;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.coursesService.emitCreatedCourse.subscribe(
      // createdCourse é o parâmetro do método emitCreatedCourse(). Abaixo, usamos ele como parâmetro e atribuímos seu valor à variável this.course
      createdCourse => this.course = createdCourse
    );
  }

}
