import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { DetailsStudentComponent } from './details-student/details-student.component';
import { FormStudentComponent } from './form-student/form-student.component';
import { StudentsComponent } from './students.component';

// services / routing module
import { StudentsDeactivateGuard } from '../guards/students-deactivate.guard';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsService } from './students.service';

// angular material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { StudentDetailResolver } from './guards/student-detail.resolver';

@NgModule({
  declarations: [
    DetailsStudentComponent,
    FormStudentComponent,
    StudentsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StudentsRoutingModule,

    MatButtonModule,
    MatFormFieldModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [
    StudentsDeactivateGuard,
    StudentDetailResolver,
    StudentsService,
  ]
})
export class StudentsModule { }
