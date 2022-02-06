import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class StudentsGuard implements CanActivateChild {
  constructor() { }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    console.log('StudentsGuard: Guarda de rotas filhas');
    // console.log(route);
    // console.log(state);

    if (state.url.includes('edit')) {
      // alert('Usuário sem acesso');
      // return false;
    }

    return true;
  }
}
