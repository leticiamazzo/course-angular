import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses.component';

import { CoursesService } from './courses.service';

@NgModule({
  // Declara os componentes, diretivas e pipes usados nesse módulo
  declarations: [
    CoursesComponent
  ],
  // Importa o que vai usar aqui
  imports: [
    CommonModule
  ],
  // Exporta aqui para ser usado em outro lugar (no caso no AppModule)
  exports: [
    CoursesComponent
  ],
  // Serviços fornecedores
  // providers: [
  //   CoursesService
  // ]
})
export class CoursesModule { }
