import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  user: User = new User();

  constructor(private authService: AuthService) { }

  ngOnInit(): void { }

  login() {
    this.authService.validateLogin(this.user)

  }
}

// precisamos passar para o serviço de autenticação o usuário e senha
