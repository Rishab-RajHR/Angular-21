import { Component, signal } from '@angular/core';


@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
    // name = 'Basil'
    count  = 0

    handleClick(){
      let abc="Hii there";
       console.log("Button Clicked", abc, this.count);
       this.helloWorld();
    }

    helloWorld() {
        console.log("Hello World");
    }
}
