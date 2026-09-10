import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-form-field',
  styleUrl: './form-field.css',
  templateUrl: './form-field.html',
})
export class FormField {
    label = input<string>();
    // value = input<string>();
    type = input<string>('text');
    valueChange = output<string>();

    onInput(value:string){
       console.log('Child Value:',value);
       this.valueChange.emit(value);
    }
}
