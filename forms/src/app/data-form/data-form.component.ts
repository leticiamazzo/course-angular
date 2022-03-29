import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { VerifyEmailService } from './services/verify-email.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { empty, Observable } from 'rxjs';
import { DropdownService } from '../shared/services/dropdown.service';
import { ConsultCepService } from '../shared/services/consult-cep.service';
import { FormValidations } from './../shared/form.validations';
import { BrState } from './../shared/models/br-state';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {
  form: FormGroup; // 1FM - variável que vai representar o formulário, onde adicionará campos, fará validações e agrupamentos de dados
  apiURL: string;

  // 19FM - cria interface para tipar variável
  // states: BrState[];
  // 24FM - declara observable de EstadoBR
  states: Observable<BrState[]>;

  // 28FM - cria varáivel cargos para receber valores vindos do service
  positions: any[];
  tecnologies: any[];
  newsletterOptions: any[];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient, // Classe disponível no módulo HttpClientModule. Ofere interface simplificada para fazer requisições
    private dropdownService: DropdownService,
    private consultCepService: ConsultCepService,
    private verifyEmailService: VerifyEmailService,
  ) {
    this.apiURL = 'https://httpbin.org/post';
  }

  ngOnInit(): void {
    // 34FM - confere serviço pra validação de email
    // this.verifyEmailService.verifyEmail('email@email.com').subscribe();

    // 20FM - faz requisição para obter lista de Estados. Precisa se inscrever porque o retorno é um Observable ou promise e queremos ser notificados quando houver retorno
    // this.dropdownService.getBrazilianStates()
    //   .subscribe(data => { this.states = data; console.log(data); });
    // 24FM - Aqui nos inscrevemos no observable que retorna a lista de Estados e essa inscrição fica ativa na memória. Pode ser que mesmo quando o componente não estiver sendo exibido na tela, essa inscrição ainda possa ficar ativa e, com isso, haver memory leaks (vazamento de memória). Pra evitar, aconselha-se a usar o | async que faz automaticamente o subscribe e também se unsubscribe.
    this.states = this.dropdownService.getBrazilianStates()

    // 29FM - Recebe valores vindos do serviço
    this.positions = this.dropdownService.getDataStates();
    this.tecnologies = this.dropdownService.getTecnologies();
    this.newsletterOptions = this.dropdownService.getNewsletter();

    // 4FM - cria formulário no momento da inicialização do componente
    // 2 FORMAS
    // 1ª é mais verbosa
    // Atribui a var form à uma instância de um FormGroup (cria um exemplar da classe FormGroup para trabalhar com ela).
    // A classe FormGroup recebe como parâmetro um objeto com cada campo que queremos declarar no formulário. Cada campo desse será um "controle" do formulário
    // Dentro da classe instânciada FormControl pode se passar o valor inicial que será exibido no campo. Ficaria assim: name: new FormControl('Leticia')
    // this.form = new FormGroup({
    //   name: new FormControl(null),
    //   email: new FormControl(null),
    // });

    // 2ª
    // Injeta FormBuilder no constructor
    // Referencia variável form e atribui a ela a instância do tipo FormGroup()
    this.form = this.formBuilder.group({
      // 8FM - Adiciona validações
      name: [null, [Validators.required, Validators.min(2), Validators.max(30)]],
      email: [null, [Validators.required, Validators.email]],
      confirmEmail: [null, [Validators.required, Validators.email]],

      // 10FM - Adiciona objeto addressGroup para que os inputs relacionados fiquem dentro dele
      addressGroup: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        number: [null, Validators.required],
        complement: [null],
        address: [null, Validators.required],
        neighborhood: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
      }),

      // 26FM - Adiciona campo no formulário reativo
      position: [null],
      tecnologies: [null],
      newsletter: [null],
      term: [null, Validators.pattern('true')],
    });

    // 34FM - Usado para validar o form inteiro e de repente exibir um check relacionado ao todo. Pode ser feito pro form ou cada fromControl
    // this.form.statusChanges
    // this.form.value
    // this.form.valueChanges

    // this.form.get('addressGroup.cep').valueChanges
    //   .subscribe(value => console.log('valor cep:' + value));
    this.form.get('addressGroup.cep').statusChanges
      .pipe(
        distinctUntilChanged(),
        tap(value => console.log('status cep:' + value)),
        switchMap(status => status === 'VALID' ?
          this.consultCepService.consultCEP(this.form.get('addressGroup.cep').value)
          : empty()
        )
      )
      .subscribe(data => data ? this.populateData(data) : {});
  }

  // buildFrameworks() {
  //   console.log('entrou');
    
  //   // Pra cada valor que existe no array frameworks, vai criar o novo array abaixo
  //   const values = this.frameworks.map(v => new FormControl(false));
  //   return this.formBuilder.array(values);
  // }

  onSubmit() {
    console.log(this.form);
    console.log(this.form.value);

    if (this.form.valid) {
      this.http.post(`${this.apiURL}`, JSON.stringify(this.form.value))
        .subscribe(data => {
          console.log(data);
          // o método get/post é assíncrono e retorna um Observable. Sendo assim, para recuperarmos seu resultado precisamos invocar o método subscribe, passando para ele uma função anônima cujo argumento é o corpo da resposta obtido, já devidamente convertido para objeto JavaScript.
        });

        // 7FM - Reseta o formulário depois da resposta do servidor
        // this.form.reset()
    }

    // 15FM - Caso o formulário seja inválido
    console.log('formulário inválido');
    this.verifyFormValidations(this.form);
    // trata formulário reativo angular como uma estrutura de dado árvore
  }

  // 16FM - Para ficar genérico, reutilizável, recursivo passamos formGroup (Grupo de controles que temos) como parâmetro, não só o form
  verifyFormValidations(formGroup: FormGroup) {
    // 16FM - Iterar cada campo de controle do formulário
    // controls = {[]} de controles. Precisamos iterar cada controle desse
    // método Object.keys() ES6 = extrai cada [] do {}
    // com o forEach vai iterar cada item do formulário
    Object.keys(formGroup.controls).forEach(controlName => {

      // 16FM - Para obter o objeto do controle
      const control = formGroup.get(controlName);
      console.log(control);
      control.markAsDirty();

      // 16FM - Verifica se o objeto do controle é uma instância do formGroup. Name é um formControl então não entra no if abaixo. Só addressGroup entra nesse if pra chamar as validações de formulário pros campos internos. O addressGroup aqui é tratado como a raiz do formulário
      if (control instanceof FormGroup) {
        this.verifyFormValidations(control);
      }
    });
  }

  verifyRequired(input: string) {
    return (
      this.form.get(input).hasError('required') && (this.form.get(input).touched || this.form.get(input).dirty)
    )
    ''
  }

  // 21FM - NA REFATORAÇAO TODA A CONSULTA DO CEP E RESPONSABILIDADE DO SERVICO
  // 13FM - Validação de CEP e requisição a API
  // consultCEP() {
  //   // 14FM - Forma de acessar o valor do CEP
  //   let cep = this.form.get('addressGroup.cep').value;
  //   console.log(cep);

  //   // retira caracter diferente de número
  //   cep = cep.replace(/\D/g, '');
  //   console.log(cep);

  //   // verifica se cep possui valor informado
  //   if (cep !== '') {
  //     // regex pra validar cep
  //     // let validateCep = /ˆ[0-9]{8}$/;
  //     // if (validateCep.test(cep)) {

  //       // reseta dados do formulário
  //       // this.resetData();


  //       this.http.get(`//viacep.com.br/ws/${cep}/json/`)
  //         .subscribe(data => this.populateData(data));
  //     // }
  //   }
  // }

  // 23FM - Faz a chamada do serviço e se inscreve para receber as mudanças 
  consultCEP() {
    let cep = this.form.get('addressGroup.cep').value;
    
    if (cep != null && cep !== '') {
      // 1º verifica por undefined e por null e depois com o valor em si
      this.consultCepService.consultCEP(cep)
      // formulário se inscreve nas mudanças e assim que ocorrerem e recebermos o resultado, popula no formulário
        .subscribe(data => this.populateData(data))
    }
  }

  resetData() {
    // método patchValue faz correção, manda valores que serão modificados
    // método setValue precisa definir todos os campos do formulário
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

    // Caso queira popular apenar 1 campo específico
    // this.form.get('name').setValue('Leticia');
  }

  // 30FM - Cria essa função pra setar o valor que seja um objeto
  setPosition() {
    const cargo = { name: 'Dev', level: 'Pleno', description: 'Dev Pl' };

    // 31FM - Essa comparação não é suficiente ao Angular. Aqui só compara a referência do objeto. Precisamos que também compare os valores com [value] e as propriedades usando compareWith (função que recebe 2 objetos e retorna boolean, indicando se esses objetos são iguais ou não)
    this.form.get('cargo').setValue(cargo);
  }

  comparePositions(obj1, obj2): boolean {
    return obj1 && obj2 ? 
      (obj1.name === obj2.name && obj1.level === obj2.level) : 
      obj1 === obj2;
  }

  // 32FM - Cria essa função pra setar múltiplos valores
  setTecnologies() {
    return this.form.get('tecnologies').setValue(['java', 'javascript'])
  }

  // 34FM - escreve validação assíncrona
  // validateEmail(formControl: FormControl) {
  //   console.log('validando');
    
  //   return this.verifyEmailService.verifyEmail(formControl.value)
  //     .pipe(
  //       map(registeredEmail => registeredEmail ? { invalidEmail: true } : null)
  //     )
  // }
}


// Permite que usuário clique no botão de submit, valida os campos e, caso não algum esteja inválido, sinaliza
