import { Component, signal, computed } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
    //  count = signal<number>(2);

    //  doubleCount = computed<number>(() => this.count() * 2);
    //  tripleCount = computed<number>(() => this.count() * 3);

    //  increment() {
    //     this.count.set(this.count() + 1);
    //  }

    // firstName = signal<string>('Alex');
    // lastName = signal<string>('Pandian');

    // fullName = computed<string>(() => `${this.firstName()} ${this.lastName()}`);


    price = signal<number[]>([10, 20, 30, 40, 50]);

    total = computed<number>(() => {
        return this.price().reduce((acc, curr) => acc + curr, 0);
    });
}
