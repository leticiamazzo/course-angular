import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainning-reactive-form',
  templateUrl: './trainning-reactive-form.component.html',
  styleUrls: ['./trainning-reactive-form.component.scss']
})
export class TrainningReactiveFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['Leticia', [Validators.required, Validators.min(2), Validators.max(30)]]
    })
  }

}
