import { Component, signal } from '@angular/core';
import { Button } from './button/button';

@Component({
  imports: [Button],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
    //  saveData(){
    //    console.log("Data Fetch");
    //  }

    message = "";
    onSave(msg: string){
       console.log(msg);
       this.message = msg;
    }
}
