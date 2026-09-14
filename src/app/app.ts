import { Component, inject } from '@angular/core';
import { User } from './user';
import { UserService } from './user-service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
     userService = inject(UserService);

     users : any = toSignal( this.userService.getUsers());
}
