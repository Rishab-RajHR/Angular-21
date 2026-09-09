import { Component, signal } from '@angular/core';
// import { FormsModule } from '@angular/forms';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  //  username = "Alex";
  // name = signal('George');

  user = signal<{ name: string; age: number }>({
       name: 'Alex',
       age: 23
  })

  updateName(value: string) {
      this.user.update(user => ({ ...user, name: value }));
  }

  updateAge() {
      this.user.update(user => ({ ...user, age: user.age+1 }));
  }
}
