import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from './../shared/log.service';

// injectable é necessário para fazer injeção de dependência, ou seja, possibilitar que outra classe utilize esse serviço
@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  // Esse objeto vai emitir eventos para que aplicação escute, se inscreva e, sempre que houver mudanças, notifique para que aplicação escute e faça alguma coisa com a informação.
  // O tipo do eventEmitter é o tipo do que quer passar, no caso cada curso que é uma string
  // Só acessa esse atributo algum componente que tenha este serviço instânciado
  emitCreatedCourse = new EventEmitter<string>();

  // static faz com que não precise da instância da classe para acessar. Ou seja, quando instâncias a esse serviço forem criadas, poderão acessar a variável createNewCourse
  // só com this. não tem acesso a essa variável. Tem que acessar assim: CoursesService.createNewCourse
  static createNewCourse = new EventEmitter<string>();

  private courses: string[];

  constructor(private logService: LogService) {
    console.log('CoursesService');

    this.courses = ['Java', 'Angular', 'Javascript', 'CSS', 'HTML'];
  }

  getCourses() {
    this.logService.consoleLog('Obtendo lista de cursos');
    return this.courses;
  }

  addCourses(course: string) {
    this.logService.consoleLog(`Criando um novo curso ${course}`);
    this.courses.push(course);

    this.emitCreatedCourse.emit(course);

    CoursesService.createNewCourse.emit(course);
  }
}
