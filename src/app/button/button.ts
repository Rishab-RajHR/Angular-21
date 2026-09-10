import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-button',
  styleUrl: './button.css',
  templateUrl: './button.html',
})
export class Button {
    label = input<string>();
    clicked = output<string>();

    onClick(){
       console.log('Card Button Clicked (Child)');
       this.clicked.emit('Button Clicked Successfully')
    }
}
