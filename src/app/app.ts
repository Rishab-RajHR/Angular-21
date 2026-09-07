import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
    name = "Angular Tutorial";
    isAdmin = true;
    count = 5;
    price = 199.99;
    isLogin = true;
    title = signal("Angular Tutorial Signal");
    getUser() {
       return "Basil Joseph";
    }
}
