import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
   lName = "alex"
   uName = "ALEX"

   today = new Date();

   amount = 2500;

   per = 0.35;

   user = {
      name: 'Mohit',
      age: 25
   }
}
