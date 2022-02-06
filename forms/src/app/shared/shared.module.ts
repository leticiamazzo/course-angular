import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { DropdownService } from './services/dropdown.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    FormDebugComponent
  ],
  exports: [
    FormDebugComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule // 19FM -  Toda vez que usa o HttpModule em um serviço, precisa importá-lo no módulo também
  ],
  providers: [
    DropdownService
  ]
})
export class SharedModule { }
