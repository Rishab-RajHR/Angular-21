import { Component, input, EventEmitter, Output, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child',
  styleUrl: './child.css',
  templateUrl: './child.html',
})
export class Child {
  //  name = input<string>();

  //  @Output() notify = new EventEmitter<string>();

  //  sendToParent(){
  //     this.notify.emit('Hello Parent (EventEmitter)')
  //  }

  message = signal('Hello Parent (Signal)');

  updateMessage(){
     this.message.set('Updated from Child Component')
  }
}
