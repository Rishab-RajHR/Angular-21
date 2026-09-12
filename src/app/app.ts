import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { form, Field } from '@angular/forms/signals';

@Component({
  imports: [CommonModule, Field],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  loginModel = signal({
    email: '',
    password: ''
  });

  loginForm = form(this.loginModel);

  submit() {
    console.log(this.loginModel());
  }
}
