import { Component, signal } from '@angular/core';

interface User {
    name : string;
    age : number;
}

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
    count = signal<number>(0);
    name = signal<string>('Angular');
    isAdmin = signal<boolean>(true);

    numbers = signal<number[]>([1,20,25,30]);
    users = signal<User>({
        name: "Alex",
        age: 24
    })

    directUpdate(){
      this.numbers.set([100,200,300]);
    }

    addNumber(){
        this.numbers.update(arr => [...arr,400])
    }
}
