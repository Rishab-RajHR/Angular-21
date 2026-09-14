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

    editingUpdateID = signal<number | null>(null);

    constructor( private userService: UserService ){}

    ngOnInit(){
        this.loadUsers();  // Load users on component initialization
    }

    loadUsers(){
       this.userService.getUsers().subscribe(data => {
          this.users.set(data);
       });
    }

    // Clicked Edit
    editUser(user: User){
       this.editingUpdateID.set(user.id!);
       this.name.set(user.name);
       this.email.set(user.email);
    }

    // Add and update User
    submitForm(){
      const payload: User = {
         name: this.name(),
         email: this.email(),
         isActive: false
      };
      //Update User
      if(this.editingUpdateID() !== null){
          this.userService.updateUser(
            this.editingUpdateID()!,
            payload
          ).subscribe(() => {
              alert('User updated successfuly');
              this.loadUsers();
              this.name.set('');
              this.email.set('');
              this.editingUpdateID.set(null);
          })
      } else {
         // Add User
          this.userService.addUser(payload).subscribe(() => {
          alert('User added successfully');
          this.afterSave();
      })
     }
    }

    afterSave(){
          this.loadUsers();
          this.name.set('');
          this.email.set('');
          this.editingUpdateID.set(null);
    }
}
