import { BrState } from './../models/br-state';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {
// 17FM - Cria JSON com os Estados: forms/src/assets/data/brazilian-states.json
// 18FM - Cria serviço para retornar os Estados (do JSON)
  constructor(private http: HttpClient) { }

  getBrazilianStates(): Observable<BrState[]> {
    return this.http.get<BrState[]>('assets/data/brazilian-states.json');
    // .pipe(
    //   // chamada vai retornar um objeto do tipo Response, ou seja, uma resposta do servidos. Ainda não é o JSON em si
    //   // Abaixo pegamos a reposta do servidor e o JSON que está vindo
    //   map((res: Response) => res.json())
    // );
  }
}
