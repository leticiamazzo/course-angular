import { AuthService } from './login/auth.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthGuard } from './guards/auth.guard';
import { CoursesGuard } from './guards/courses.guard';
import { StudentsGuard } from './guards/students.guard';

const routes: Routes = [
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(mod => mod.CoursesModule),
    canActivate: [AuthGuard], // aplica em todas as rotas que não quer que usuário acesse sem estar logado. Como se perguntasse: "posso ativar ativar aquela rota?"
    canActivateChild: [CoursesGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'students',
    loadChildren: () => import('./students/students.module').then(mod => mod.StudentsModule),
    canActivate: [AuthGuard],
    // canActivateChild: [StudentsGuard]
    canLoad: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent } // Leva usuário para a página com mensagem de não encontrada, mas levar para o lgin deve ser melhor
  { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuard] } // Redireciona para a página de login caso tente ir para rota inválida
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})], // html5 não usa # como padrão para rotas. Mas back-end / servidor pode não reconhecer o link e não identificar quando está tentando acessar roteamento ou url para chamada a api. Por isso Angular oferece opção de usar # no roteamento
  exports: [RouterModule]
})
export class AppRoutingModule { }
