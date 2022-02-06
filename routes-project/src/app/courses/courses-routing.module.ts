import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseNotFoundComponent } from './course-not-found/course-not-found.component';

const coursesRoutes: Routes = [
  // { path: 'courses', component: CoursesComponent }, // para implementar lazy loading, precisa retirar o path:'courses'
  { path: '', component: CoursesComponent },
  { path: 'not-found', component: CourseNotFoundComponent },
  { path: ':id', component: CourseDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(coursesRoutes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
