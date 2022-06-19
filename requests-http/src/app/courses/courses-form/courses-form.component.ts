import { map, switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertModalService } from './../../shared/alert-modal.service';
import { AlertModalComponent } from './../../shared/alert-modal/alert-modal.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb : FormBuilder,
    private coursesService: CoursesService,
    private modal: AlertModalService,
    private router: Router,
    private route: ActivatedRoute, //classe que contém os parâmetros da rota
  ) { }

  ngOnInit(): void {
    // para pegar o id da rota de edição, mas tem subscribes aninhados, por isso refatora
    // this.route.params.subscribe(
    //   (params: any) => {
    //     const id = params['id'];

    //     const course$ = this.coursesService.loadById(id);
    //     course$.subscribe(course => {
    //       this.updateForm(course);
    //     })
    //   }
    // )

    // Esse caso é uma das raras exceções em que não precisa fazer unsubscribe, pois Angular faz automaticamente ao sair de uma rota e navegar para a outra
    this.route.params.pipe(
      map((params: any) => params['id']),
      switchMap(id => this.coursesService.loadById(id))
    )
    .subscribe(course => this.updateForm(course));

    // switchmap cancela requisições anteriores e retorna valor do último pedido observable
    this.form = this.fb.group({
      id: [null],
      // [1-valor inicial é null, passa um [] de validações, 2- quantidade mínma de caractéres, 3- limite de caractéres para evitar erros ao inserir na base]]
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    })

    console.log(this.form);

  }

  updateForm(course: any) {

    this.form.patchValue({
      id: course.id,
      name: course.name
    })
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  onSubmit() {
    this.submitted = true;

    console.log(this.form.value);

    if (this.form.valid) {
      console.log('onSubmit');
      this.coursesService.create(this.form.value).subscribe(
        success => {
          this.modal.showAlertSuccess('Criado com sucesso!'),
          this.router.navigate(['/'])
        },
        error => this.modal.showAlertDanger('Erro ao criar curso, tente novamente'),
        () => console.log('request completa'),
      );
    }

  }

  onCancel() {
    this.submitted = false;

    this.form.reset();
  }
}
