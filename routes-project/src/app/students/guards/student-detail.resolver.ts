import { StudentsService } from './../students.service';
import { Student } from './../student';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StudentDetailResolver implements Resolve<Student> {

  constructor(private studentsService: StudentsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Student> | Promise<Student> | Student {
    console.log('StudentDetailResolver: resolver (vai carregar os dados necessários antes de carregar o componente)');

    let id = route.params['id'];

    return this.studentsService.getStudent(id);
  }
}
