import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
    constructor(private router: Router) {}

    openProduct(){
        this.router.navigate(['product', 101]);
    }
    goToLogin(){
       this.router.navigateByUrl('/login');
    }
}
