import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../login/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanLoad {
  // essa classe se torna guarda de rota ao implementar o CanActivate

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot, // tem informações da rota
    state: RouterStateSnapshot // estado da rota
    // retorna observable porque é um valor que pode mudar, do tipo boolean pra dizer se usuário pode ou não acessar rota
  ): Observable<boolean> | boolean {
    console.log('Verificando com AuthGuard se usuário está logado');

    return this.verifyAccess();
  }

  private verifyAccess() {
    if (this.authService.isUserAuthenticated()) {
      return true // true se usuário puder utilizar a rota, false se não puder
    }
    this.router.navigate(['/login'])

    return false
  }

  canLoad(route: Route) {
    console.log('canLoad: verificando se usuário pode carregar o código do módulo');

    return this.verifyAccess();
  }
}
