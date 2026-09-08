import { Component, signal } from '@angular/core';


@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
    name: string = "";
    city: string = "";
    email: string = "";

    updateName(val:string){
       this.name = val;
    }

    getEmail(val:string){
        this.email = val;
    }
}
