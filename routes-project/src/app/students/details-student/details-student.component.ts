import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from '../student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-details-student',
  templateUrl: './details-student.component.html',
  styleUrls: ['./details-student.component.scss']
})
export class DetailsStudentComponent implements OnInit, OnDestroy {
// para que o componente de detalhes receba os detalhes vindos do serviço e os exiba, precisa: ter o ActivatedRoute e que se inscreva nos parâmetros da rota, para obter o parâmetro necessário (id)

id: number;
inscription: Subscription;
student: Student;

  // no constructor abaixo acontece uma injeção de dependência
  // route é uma instância da rota
  // ActivatedRoute é uma classe pra obter os detalhes da rota
  // Router é uma classe com métodos responsáveis para fazer redirecionamento
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentsService: StudentsService
  ) { }

  ngOnInit(): void {
    // se inscreve nas mudanças do parâmetro e faz algo com o resultado
    // this.route.params é do tipo de inscrição, então tem que atribuir o valor ao Subscription

    console.log('ngOnInit: DetailsStudentComponent');


    console.log(this.route);

    // Comentado porque passamos a pegar o id antes de carregar o componente com o guard resolver
    // this.inscription = this.route.params.subscribe((params: any) => {
    //   this.id = params['id']

    //   this.student = this.studentsService.getStudent(this.id);
    //   console.log(this.student);
    // })


    // data = atributo para acessar os dados fornecidos
    // quando retorna um observable, tem que se inscrever para ficar escutando o resultado
    this.inscription = this.route.data.subscribe(
      (info) => {
        console.log('Inicializa o componente recebendo o objeto Student de resolver');
        console.log(info);

        this.student = info.studentInfo;

      }
    )

  }

  editStudent() {
    this.router.navigate(['/students', this.student.id, 'edit']);
  }

  ngOnDestroy() {
    this.inscription.unsubscribe()
  }
}
