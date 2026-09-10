// import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule, CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
    // name = signal('');
    // email = signal('');

    // submitForm(){
    //    console.log(`Name: ${this.name()}, Email: ${this.email()}`);
    // }

    userSignal = signal({ name: '', email: '' });

    form: any;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            name: [''],
            email: ['']
        })

        this.form.valueChanges.subscribe((value: any) => {
            this.userSignal.set(value);
        });
    }

    submitForm() {
       console.log(`Name: ${this.userSignal().name}, Email: ${this.userSignal()}`);
    }

}
