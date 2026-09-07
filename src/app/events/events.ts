import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-events',
  styleUrl: './events.css',
  templateUrl: './events.html',
})
export class Events {
    count = signal(0);
    increment() {
       this.count.update((c) => c + 1);
    }

    showEvent(e: any) {
       console.log(e);
    }

    username = '';
    updateUser(value: string) {
        this.username = value;
    }

    handleSubmit(e: any) {
       e.preventDefault();
       console.log("Form Submitted");
    }
}
