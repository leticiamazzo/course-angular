import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormControl, Validators} from '@angular/forms';
import { map } from 'rxjs/operators';
import { TemplateFormService } from './template-form.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  apiURL: string;

  user: any = {
    name: 'Leticia',
    email: 'leticia@email.com'
  }

  constructor(private http: HttpClient, private templateFormService: TemplateFormService) {
    this.apiURL = 'https://httpbin.org/post';
  }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Você deve digitar um valor';
    }

    return this.email.hasError('email') ? 'Esse e-mail não é válido' : '';
  }

  onSubmit(f) {
    console.log(f);

    console.log(this.user);

  }

  consultCEP(cep) {
    console.log(cep);

    // variável cep só tem números
    cep = cep.replace(/\D/g, '');

    if (cep != '') {
      // regex pra validar cep
      const validateCep = /ˆ[0-9]{8}$/;

      // validar formato cep
      if (validateCep.test(cep)) {
        // map = é o do rxjs mas parece com o do js. ele obtém uma informação e mapeia em outra informação.
        // Pega os dados que estão sendo enviados pelo servidor em formato json
          // map(data => data = JSON.parse(cep))

          // subscribe = similar ao callback. notifica quando informações estiverem prontas. Como uma inscrição no youtube que recebe aviso quando há novo vídeo
          // subscribe(data => console.log(data))

          // this.teste = this.templateFormService.isCepValid()
          // .subscribe(cep => console.log(cep));

          //   .this.service.function
          //   (cep => console.log(cep));

      }

    }
  }
}


// 1- quando ocorrer evento de blur, ou seja, quando campo de cep perder o foco, chama a função. Nela pega o valor do formulário e remove qualquer caracter que não seja número para passar pela chamada do webservice
// 2- Restanto só os números, confere se é diferente de vazio. Se sim, aplica uma expressão regular para validar o CEP
// 3- Testa se o CEP obtido é válido
// 4- Se sim consulta o webservice viacep através da funcão getJSON do JS. Faz chamada Ajax, obtém resultado, transforma em JSON e no callback recebe os dados, verficia se tem erro, senão pega cada valor e atibui a um campo do formulário


