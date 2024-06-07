import { Component } from '@angular/core';
import { iAuthData } from '../../../Models/i-auth-data';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  authData:iAuthData = {
    email: '',
    password: ''
  }
  constructor(
    private authSrv: AuthService,
    private router: Router
  ) {}

  login(){
    this.authSrv.login(this.authData).subscribe(() => {
      this.router.navigate(['/dashboard']);
    })
  }
}
