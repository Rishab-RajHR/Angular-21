import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
    status: string = "processing";
    marks: number = 72;

    age:number = 0;

    updateAge(val: string){
       this.age = Number(val);
    }

    section = "home";
}
