import { Router } from '@angular/router';
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
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      // [1-valor inicial é null, passa um [] de validações, 2- quantidade mínma de caractéres, 3- limite de caractéres para evitar erros ao inserir na base]]
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    })

    console.log(this.form);

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
