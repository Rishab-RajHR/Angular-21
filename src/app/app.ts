import { Component, signal } from '@angular/core';
import { Events } from './events/events';


@Component({
  imports: [Events],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-tut');
  name = "Angular Tutorial";
  username = "TovinoThomas";
   isAdmin = true;
   count = 3;
}
