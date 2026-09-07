import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
    value = 10;

    // value = "Alex"

    name: string | number = 'George Kurian';
    age: number = 10;
    isValid: boolean = true;

    handleClick() {
        let value;
        value = 'Allu Arjun'
        value = 10;
        console.log(value);
    }

    sum(a: number, b: number){
        console.log(a + b);
    }
}
