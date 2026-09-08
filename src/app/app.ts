import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  //  items  = ['HTML', 'CSS', 'JavaScript', 'Angular' ];

  //  users = [
  //    { name: 'Mohit', age: 24 },
  //    { name: 'John', age: 30 },
  //    { name: 'Alex', age: 34 }
  //  ];

   items = ['Apple', 'Banana', 'Cherry', 'Dates'];

   removeItem(i: number){
       this.items.splice(i, 1);
   }

}
