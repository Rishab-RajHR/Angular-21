import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
   items = ['HTML', 'css', 'JavaScript', 'TypeScript', 'Angular'];

   numbers = [1, 2, 3, 4, 5];
}
