import { Component, signal } from '@angular/core';
import { User } from './user';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
    users: any[] = [];

    constructor(private userService: User){}

    ngOnInit(){
       this.userService.getUsers().subscribe((data: any)=>{
           this.users = data;
       })
    }
}
