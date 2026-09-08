import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
   isLoggedIn = false;

   marks = 65;

   showBox = true;

   toggleBox(){
      this.showBox = !this.showBox;
   }

   age = 0;

   updateAge(val: string) {
      this.age = Number(val);
   }
}
