import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trainning-reactive-form',
  templateUrl: './trainning-reactive-form.component.html',
  styleUrls: ['./trainning-reactive-form.component.scss']
})
export class TrainningReactiveFormComponent implements OnInit {
  form: FormGroup;
  apiURL: string;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) {
    this.apiURL = 'https://httpbin.org/post';
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['Leticia', [Validators.required, Validators.min(2), Validators.max(30)]],
      email: ['leticiamazzo@gmail.com', [Validators.required, Validators.email]],

      addressGroup: this.formBuilder.group({
        cep: [null, Validators.required],
        number: [null, Validators.required],
        complement: [null],
        address: [null, Validators.required],
        neighborhood: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
      })

    })
  }

  onSubmit() {
    console.log(this.form);
    
    this.http.post(`${this.apiURL}`, JSON.stringify(this.form.value))
    .subscribe(data => {
      console.log(data);

      this.form.reset()
    }, 
      // caso aconteça um erro formulário não é resetado e usuário ainda pode corrigir sem perder o que fez
      (error => alert('erro'))
    
    );
  }

  consultCEP() {
    let cep = this.form.get('addressGroup.cep').value;

    cep = cep.replace(/\D/g, '');

    if (cep !== '') {
    //   let validateCep = /ˆ[0-9]{8}$/;
      
    //   if (validateCep.test(cep)) {
        // this.resetData();

        this.http.get(`//viacep.com.br/ws/${cep}/json/`)
          .subscribe(data => this.populateData(data));
      // }
    }
  }

  resetData() {
    this.form.patchValue({
      name: null,
      email: null,
      addressGroup: {
        cep: null,
        number: null,
        complement: null,
        address: null,
        neighborhood: null,
        city: null,
        state: null,
      }
    });
  }

  populateData(data) {
    this.form.patchValue({
      addressGroup: {
        complement: data.complemento,
        address: data.logradouro,
        neighborhood: data.bairro,
        city: data.localidade,
        state: data.uf,
      }
    });
  }
}
