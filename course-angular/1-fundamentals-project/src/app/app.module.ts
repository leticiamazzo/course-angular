import { LOCALE_ID } from '@angular/core';
// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CoursesModule } from './courses/courses.module';
import { CreateCourseModule } from './create-course/create-course.module';
import { FormModule } from './form/form.module';

// Components
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CycleComponent } from './cycle/cycle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirectiveNgIfComponent } from './directive-ng-if/directive-ng-if.component';
import { DirectiveNgSwitchComponent } from './directive-ng-switch/directive-ng-switch.component';
import { DirectiveNgForComponent } from './directive-ng-for/directive-ng-for.component';
import { DirectiveNgStyleComponent } from './directive-ng-style/directive-ng-style.component';
import { ElvisOperatorComponent } from './elvis-operator/elvis-operator.component';
import { DirectiveNgContentComponent } from './directive-ng-content/directive-ng-content.component';
import { YellowBackgroundDirective } from './shared/yellow-background.directive';
import { CustomizeDirectivesComponent } from './customize-directives/customize-directives.component';

// Providers
import { LogService } from './shared/log.service';

@NgModule({
  // Declara os componentes, diretivas e pipes usados nesse módulo
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CycleComponent,
    DirectiveNgIfComponent,
    DirectiveNgSwitchComponent,
    DirectiveNgForComponent,
    DirectiveNgStyleComponent,
    ElvisOperatorComponent,
    DirectiveNgContentComponent,
    YellowBackgroundDirective,
    CustomizeDirectivesComponent,
  ],
  // Importa o que vai usar aqui
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    CoursesModule,
    CreateCourseModule,
    FormModule,
    BrowserAnimationsModule
  ],
  // Serviços fornecedores de toda a aplicação com escopo global
  providers: [
    LogService,
    {
      provide: LOCALE_ID,
      useValue: 'pt_BR',
    }
  ],
  // Define componente que será carregado nesse módulo. Só é usado no AppModule
  bootstrap: [AppComponent]
})
export class AppModule { }
