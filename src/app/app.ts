import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserService } from './services/user-service';
import { User } from './models/user';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
     userService = inject(UserService);

     users : any = toSignal<User[]>( this.userService.getUsers());
}
