import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { DropdownService } from './services/dropdown.service';
import { HttpClientModule } from '@angular/common/http';
import { ErrorMessageComponent } from './error-message/error-message.component';



@NgModule({
  declarations: [
    FormDebugComponent,
    ErrorMessageComponent
  ],
  exports: [
    FormDebugComponent,
    ErrorMessageComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule // 19FM -  Toda vez que usa o HttpModule em um serviço, precisa importá-lo no módulo também
  ],
  providers: [
    DropdownService // 19FM -  Em versões anteriores do angular precisava expor o serviço que quer disponível aos módulos, mas com   providedIn: 'root' não precisa. É só importar o serviço no componenete e usar
  ]
})
export class SharedModule { }
