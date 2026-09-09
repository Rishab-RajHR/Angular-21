import { Component, effect, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  //  count = signal(0);

  //  constructor(){
  //     effect(()=>{
  //        console.log("Count Value:", this.count())
  //     });
  //  }

  //  increment(){
  //     this.count.update(c => c + 1);
  //  }

  //  isDarkMode = signal(false);

  //  constructor(){
  //     effect(()=>{
  //          if(this.isDarkMode()){
  //             document.body.style.backgroundColor = 'black';
  //             document.body.style.color = 'white';
  //          }
  //          else{
  //             document.body.style.backgroundColor = 'white';
  //             document.body.style.color = 'black';
  //          }
  //     });
  //  }

  //  toggle(){
  //     this.isDarkMode.update(mode => !mode);
  //  }

   message = signal("");

   constructor(){
      effect(()=>{
          if(this.message()){
              setTimeout(() => {
                  this.message.set("");
              }, 1000);
          }
      });
   }

   showMessage(){
      this.message.set("Hello, this is a temporary message!");
   }

}
