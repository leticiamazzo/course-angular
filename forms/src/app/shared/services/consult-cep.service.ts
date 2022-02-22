import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultCepService {

  constructor(    
    private http: HttpClient, // Classe disponível no módulo HttpClientModule. Ofere interface simplificada para fazer requisições
  ) { }

    // 13FM - Validação de CEP e requisição a API
    consultCEP(cep: string) {  
      // retira caracter diferente de número
      cep = cep.replace(/\D/g, '');
      console.log(cep);
  
      // verifica se cep possui valor informado
      if (cep !== '') {
        // regex pra validar cep
        let validateCep = /ˆ[0-9]{8}$/;

        // Valida o formato do cep
        // if (validateCep.test(cep)) {
          // 22FM - Serviço faz a chamada e o próprio formulário faz o subscribe
          return this.http.get(`//viacep.com.br/ws/${cep}/json/`);
        // }
      }

      // Pra sempre retornar algo caso o cep seja válido ou não
      return of({})
    }
}
