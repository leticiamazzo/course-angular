import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticatedUser: boolean;
  showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  validateLogin(user: User) {
    // Em um projeto real, front captaria essas informações, enviaria para um servidor, ele validaria e faria a autenticação e retornaria com um token pra poder validar a seção
    console.log(user);

    if (user.name === "user@email.com" && user.password === "123456") {
      this.authenticatedUser = true;

      this.showMenuEmitter.emit(true);

      this.router.navigate(['/']);

      console.log(this.authenticatedUser);
    } else {
      this.authenticatedUser = false;

      this.showMenuEmitter.emit(false);

      console.log(this.authenticatedUser);
    }
  }

  // método usado no AuthGuard para levar ou não para uma rota
  isUserAuthenticated() {
    return this.authenticatedUser;
  }
}
