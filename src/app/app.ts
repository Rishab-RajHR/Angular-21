import { Component, inject, signal } from '@angular/core';
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
    //  userService = inject(UserService);

    //  users : any = toSignal<User[]>( this.userService.getUsers());

    // users: User[] = [];

    users = signal<User[]>([]);
    name = signal<string>('');
    email = signal<string>('');

    constructor( private userService: UserService ){}

    ngOnInit(){
        this.loadUsers();  // Load users on component initialization
    }

    loadUsers(){
       this.userService.getUsers().subscribe(data => {
          this.users.set(data);
       });
    }

    submitForm(){
      const payload: User = {
         name: this.name(),
         email: this.email(),
         isActive: false
      };
      this.userService.addUser(payload).subscribe(() => {
          alert('User added successfully');
          this.loadUsers();   // Refresh the user list after adding a new user
          this.name.set('');
          this.email.set('');
      })
    }
}
