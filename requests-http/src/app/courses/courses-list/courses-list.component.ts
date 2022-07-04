import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertModalComponent } from './../../shared/alert-modal/alert-modal.component';
import { Component, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EMPTY, empty, Observable, of, Subject } from 'rxjs';
import { catchError, switchMap, take, tap } from 'rxjs/operators';

import { Course } from '../course';
import { CoursesService } from '../courses.service';
import { AlertModalService } from './../../shared/alert-modal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  // courses$:courses: Course[];
  courses$: Observable<any>; //Observable<Course[]>; deveria ser, mas deu erro Type 'Observable<unknown>' is not assignable to type 'Observable<Course[]>'.
  error$ = new Subject<boolean>();

  // bsModalRef?: BsModalRef;
  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal') deleteModal: any;

  selectedCourse: Course;

  // displayedColumns: string[];
  // columns: string[];

  constructor(
    private courseService: CoursesService,
    private modalService: BsModalService,
    private alertModalService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    // this.courses = [];
    // this.displayedColumns = ['id', 'name', 'actions'];
    // this.columns = ['ID', 'Curso', ''];
  }

  ngOnInit(): void {
    // this.courseService
    //   .list()
    // Precisa se inscrever e ficar escutando as mudanças que vão ser enviadas por esse Observable
    // no subscriber pega o resultado (data, no caso) e atribui a variável courses
    // .subscribe(console.log);
    // .subscribe(data => this.courses = data);

    // subscribe e | async sevem pra se inscrever manualmente.
    // com subscribe sempre que se inscreve, também precisa desinscrever para não ficar consumindo memória sem necessidade, levando a problemas de performance e memory leaks. Funciona como inscrição em um serviço de streaming, onde cadastra cartão de crédito e é cobrado mensalmente (mesmo que não esteja usando) até que se desenscreva
    // benefício do | async é deixar o gerenciamento com o Angular

    this.onRefresh();
  }

  onRefresh() {
    this.courses$ = this.courseService.list().pipe(
      // Tratamento em caso de erro. Ex: API não responde
      catchError((error) => {
        // recebe observable de error
        console.error(error);
        // this.error$.next(true);
        this.handleError();
        return of(); //retorna vazio
      })
    );

    // Caso use subscribe, pode colocar 3 lógicas / parâmetros
    // .subscribe(
    //    data => console.log(data) // 1ª - caso de sucesso
    //    error => console.error(error) 2ª- caso de erro
    //    () => console.log('Observable completo') 3ª- quando observable está completo e não vai mais emitir valor
    // )
  }

  handleError() {
    this.alertModalService.showAlertDanger(
      'Erro ao carregar cursos. Tente novamente mais tarde.'
    );
  }

  onEdit(id: number) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

  onDelete(course: any) {
    this.selectedCourse = course;
    // this.deleteModalRef = this.modalService.show(this.deleteModal, {
    //   class: 'modal-sm',
    // });

    const result$ = this.alertModalService.showConfirm('Confirmação', 'Quer excluir esse curso?');
    result$.asObservable()
    .pipe(
      take(1),
      // switchMap = pega valor retornado e vai retornar outro observable. se botão clicado for true, segue registro
      switchMap(result => result ? this.courseService.remove(course.id) : EMPTY)
    )
    // faz subscribe para receber valor
    .subscribe(
      success => {
        this.onRefresh(),
        this.onDeclineDelete()
      },
      error => {
        this.alertModalService.showAlertDanger('Erro ao remover cursos. Tente novamente mais tarde.'),
        this.onDeclineDelete()
      }
    )
  }

  onConfirmDelete() {
    console.log(this.selectedCourse);

    // //não precisamos fazer unsubscribe pq no serviço já tem o takeUntil(1) assim que for pro servidor e voltar com resultado
    this.courseService.remove(this.selectedCourse.id).subscribe(
      success => {
        this.onRefresh(),
        this.onDeclineDelete()
      },
      error => {
        this.alertModalService.showAlertDanger('Erro ao remover cursos. Tente novamente mais tarde.'),
        this.onDeclineDelete()
      }
    )
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }
}
