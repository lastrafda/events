import { Component } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px }
  `]
})

export class LoginComponent{
  userName: string;
  password: string;
  mouseOverLogin: boolean;
  constructor(private authService: AuthService,
              private router: Router) {
    this.mouseOverLogin = false;
  }
  login(formValues: any) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['events']);
  }
  cancel(){
    this.router.navigate(['events']);
  }
}
