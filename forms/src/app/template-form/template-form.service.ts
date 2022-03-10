import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateFormService {

  constructor(private http: HttpClient) { }

  isCepValid(cep): void {
    this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
    .subscribe(data => console.log(data))

  }
}
