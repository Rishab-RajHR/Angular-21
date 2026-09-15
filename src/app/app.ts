import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
   name = signal('Alex Pandian');

   submitForm(){
      alert(`User ${this.name()} saved successfully!`);
   }
}
