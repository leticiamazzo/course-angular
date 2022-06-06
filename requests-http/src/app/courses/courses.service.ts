import { delay, tap } from 'rxjs/operators';
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
}
