import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  id: number;
  inscription: Subscription;
  course: any;

  // no constructor abaixo acontece uma injeção de dependência
  // route é uma instância da rota
  // Router é uma classe com métodos responsáveis para fazer redirecionamento
  // ActivatedRoute é uma classe pra obter os detalhes da rota
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService,
  ) {
    console.log(this.route);

    // solução problemática porque não escuta alterações
    // coloca ['id'] assim, porque params é um objeto dinâmico e nem sempre o id vai ser um atributo desse objeto. como objeto é um conjunto de chave e valor, acessamos assim
    // this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    // se inscreve nas mudanças do parâmetro e faz algo com o resultado
    // this.route.params é do tipo de inscrição, então tem que atribuir o valor ao Subscription
    this.inscription = this.route.params.subscribe((params: any) => {
      this.id = params['id'];

      this.course = this.coursesService.getCourseName(this.id);

      if (this.course == null) {
        this.router.navigate(['/courses/not-found'])
      }
    })
  }

  // toda vez que faz uma inscrição, mesmo depois da classe CourseDetailsComponent ser destruída, a inscrição pode continuar viva
  ngOnDestroy() {
    this.inscription.unsubscribe()
  }

}
