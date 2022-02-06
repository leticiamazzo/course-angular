import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent } from './students.component';
import { FormStudentComponent } from './form-student/form-student.component';
import { DetailsStudentComponent } from './details-student/details-student.component';
import { StudentsGuard } from '../guards/students.guard';
import { StudentsDeactivateGuard } from '../guards/students-deactivate.guard';
import { StudentDetailResolver } from './guards/student-detail.resolver';

// para evitar colisão de rota, as rotas hard coded vêm primeiro e as com parâmetros dinâmicos têm que vir por último
const studentsRoutes: Routes = [
  // { path: 'students', component: StudentsComponent, children: [ // para implementar lazy loading, precisa retirar o path:'courses'
  {
    path: '',
    component: StudentsComponent,
    canActivateChild: [StudentsGuard],
    
    children: [
      { path: 'new', component: FormStudentComponent },
      { path: ':id',
        component: DetailsStudentComponent,
        resolve: { studentInfo: StudentDetailResolver }
      },
      {
        path: ':id/edit',
        component: FormStudentComponent,
        canDeactivate: [StudentsDeactivateGuard]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(studentsRoutes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
