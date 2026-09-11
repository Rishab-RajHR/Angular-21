import { Component, signal } from '@angular/core';
import { Child } from './child/child';

@Component({
  imports: [Child],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
    title = signal("Hello from App Component");
    show = signal(true);

    changeTitle(){
        this.title.set("Title Changed!");
    }

    toggle(){
      this.show.set(!this.show());
    }
}
