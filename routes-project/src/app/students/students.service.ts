import { Student } from './student';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private students: Student[] = [
    {id: 1, name: 'Aluno 01', email: 'aluno01@email.com'},
    {id: 2, name: 'Aluno 02', email: 'aluno02@email.com'},
    {id: 3, name: 'Aluno 03', email: 'aluno03@email.com'}
  ];

  constructor() { }

  getStudents() {
    return this.students;
  }

  getStudent(id: number) {
    let students = this.getStudents();

    for(let i = 0; i < students.length; i++) {
      let student = students[i];

      if (student.id == id) {
        return student;
      }
    }
    return null;
  }
}
