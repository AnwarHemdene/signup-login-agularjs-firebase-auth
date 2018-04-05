import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  router : Router;
  email: string;
  password: string;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }
}
