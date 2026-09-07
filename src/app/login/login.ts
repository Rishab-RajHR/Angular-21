import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
    imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7FNl3f0V_x6O7lYiNYCshYLFStnlEPiNmkwcoV_y6g&s=10";
    isDisabled = false;
    username = "George";
    isActive = true;
    boxWidth = 100;
    bGColor = 'red';
    count = signal(0);
}
