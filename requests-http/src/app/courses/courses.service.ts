import { delay, take, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from './course';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  // readonly = não pode atualizar o valor da variável
  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  // return é (method) CoursesService.list(): Observable<Object>
  // criou uma interface para parametrizar o tipo de retorno
  // ao colocar <Course> o parâmetro passa a ser Observable de Course e acrescenta [] porque é o que vai retornar
  list(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.API}courses`)
    .pipe(
      delay(2000),
      tap(console.log)
    )
  }

  loadById(id: number) {
    return this.http.get<Course>(`${this.API}courses/${id}`).pipe(take(1));
  }

  private create(course: Course) {
    return this.http.post(`${this.API}courses`, course)
      .pipe(
        // se desencreve do observable após 1 chamada
        take(1)
      )
  }

  private update(course: Course) {
    return this.http.put(`${this.API}courses/${course.id}`, course).pipe(take(1));
  }

  save(course: Course) {
    if (course.id) {
      return this.update(course);
    }
    return this.create(course);
  }

  remove(id: any) {
    return this.http.delete(`${this.API}courses/${id}`).pipe(take(1));
    // take(1) pq queremos ir no servidor, fazer request, pegar o resultado, se der errado usuário tenta novamente sem que precisemos nos desinscrever do observable
  }
}
