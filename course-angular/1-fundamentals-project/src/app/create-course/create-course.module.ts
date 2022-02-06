import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCourseComponent } from './create-course.component';
import { CreateCourseReceiveComponent } from './../create-course-receive/create-course-receive.component';
import { CoursesService } from './../courses/courses.service';


@NgModule({
  declarations: [
    CreateCourseComponent,
    CreateCourseReceiveComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreateCourseComponent
  ],
  // nos providers devem estar os services utilizados
  // providers: [
  //   CoursesService
  // ]
})
export class CreateCourseModule { }
