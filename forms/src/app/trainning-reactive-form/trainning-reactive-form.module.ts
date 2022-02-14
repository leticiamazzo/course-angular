
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TemplateFormComponent } from '../template-form/template-form.component';
import { TrainningReactiveFormComponent } from './trainning-reactive-form.component';
import { SharedModule } from '../shared/shared.module';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TrainningReactiveFormComponent  
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,

    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule
  ]
})
export class TrainningReactiveFormModule { }
