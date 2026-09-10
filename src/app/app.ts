import { Component, signal } from '@angular/core';
import { Child } from './child/child';

@Component({
  imports: [Child],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  //  username: string = 'Tovino Thomas';
  message: string = '';

  onMessage(msg: string){
     this.message = msg;
  }
}
