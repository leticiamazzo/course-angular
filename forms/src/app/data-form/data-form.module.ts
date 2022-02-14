import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataFormComponent } from './data-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DataFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, // 2FM - p/ trabalhar com formulários reativos, precisa importar ReactiveFormsModule
    HttpClientModule,

    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule
  ]
})
export class DataFormModule { }
