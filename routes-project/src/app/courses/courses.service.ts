import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

   getCourses() {
    return [
      { id: 1, name:'Angular' },
      { id: 2, name:'Java' },
    ]
  }

  getCourseName(id: number) {
    let courses = this.getCourses();

    for(let i = 0; i < courses.length; i++) {
      let course = courses[i];

      if (course.id == id) {
        return course.name;
      }
    }
    return null;
  }
}
