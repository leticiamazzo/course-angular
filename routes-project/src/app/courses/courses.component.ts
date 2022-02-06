import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: object;
  page: number;
  inscription: Subscription;

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();

    this.inscription = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.page = queryParams['page'];
      }
    );    
  }

  changePage() {
    this.page ++;

    this.router.navigate(['/courses'], {queryParams: {'page': this.page }})
  }

  ngOnDestroy(): void {
    this.inscription.unsubscribe();
  }

}

// ver lista de cursos 
// clicar em um curso
// redirecionar a rota para detalhe do curso
// se não existir, redirecionar para outra página