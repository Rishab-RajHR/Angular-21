import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
   count = signal(0);  // Signal Created
   val = 20;

  //  count.update(c => c + 1);  // Signal Updated

  // items.mutated(a => a.push(4));  // Signal Mutated

  increment(){
      this.count.update(c => c + 1);
  }
  decrement(){
     this.count.update(c => c - 1);
  }
  reset(){
     this.count.set(0);
  }
}
