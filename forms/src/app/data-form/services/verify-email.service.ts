import { delay, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerifyEmailService {

  constructor(private http: HttpClient) { }

  // 33FM - cria serviço pra validação de email
  verifyEmail(email: string ) {
    return this.http.get('assets/data/verifyEmail.json')
      .pipe(
        delay(2000),
        // map vai descartar qualquer outra propriedade que não seja emails do json 
        map((data: {emails: any[]}) => data.emails),
        tap(console.log),
        map((data: {email: string}[]) => data.filter(v => v.email === email )),
        // tap(console.log),
        map((data: any[]) => data.length > 0),
        // tap(console.log),
      )
  }
}
