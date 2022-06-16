import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesFormComponent } from './courses-form/courses-form.component';
import { CoursesListComponent } from './courses-list/courses-list.component';

const routes: Routes = [
  { path: '', component: CoursesListComponent },
  { path: 'novo', component: CoursesFormComponent },
  { path: 'editar/:id', component: CoursesFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
