import { Component, signal } from '@angular/core';
import { Card } from './card/card';
// import { FormsModule } from '@angular/forms';

@Component({
  imports: [Card],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

}
