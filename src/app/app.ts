import { Component, signal } from '@angular/core';


@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
    handleClick() {
       console.log('Button clicked!');
    }

    onTyping(event: any){
        console.log("Typed", event.target.value);
    }

    onKeyUp(event: any) {
        console.log("Key Up Event", event.key);
    }

    onHover(){
        console.log("Hover Event");
    }

    onLeave(){
        console.log("Leave Event");
    }

    onBlur() {
       console.log("Blur Event");
    }

    onFocus() {
        console.log("Focus Event");
    }
}
