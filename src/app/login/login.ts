import { Component } from '@angular/core';
import { Auth } from '../auth';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
    constructor( private auth: Auth, private router: Router) {}

    Login() {
        this.auth.login();
        this.router.navigate(['/dashboard']);
    }
}
