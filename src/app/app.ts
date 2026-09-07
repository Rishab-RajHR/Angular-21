import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { SigninComponent } from './signin/signin';

@Component({
  selector: 'app-root',
  imports: [Login,SigninComponent],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-tut');
  name = "Angular Tutorial";
  username = "TovinoThomas";
   isAdmin = true;
   count = 3;
}
