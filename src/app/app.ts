import { Component, signal } from '@angular/core';
// import { CounterStore } from './core/store/counter';
import { UserStore } from './core/store/user';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  //  constructor(public counterStore: CounterStore) {}
  constructor(public userStore: UserStore) {}
}
