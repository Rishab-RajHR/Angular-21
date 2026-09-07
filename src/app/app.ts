import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
    count : number = 0;

    // handleAdd(){
    //   this.count++;
    // }

    // handleMinus(){
    //    if(this.count > 0){
    //       this.count--;
    //    }
    // }

    // handleReset(){
    //    this.count = 0;
    // }

    handle(value: string){
         if(value === 'plus'){
             this.count++;
         }
         else if(value === 'minus'){
            this.count--;
         }
         else{
            this.count = 0;
         }
    }

}
