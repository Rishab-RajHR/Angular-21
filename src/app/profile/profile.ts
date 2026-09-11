import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  imports: [RouterLink],
  selector: 'app-profile',
  styleUrl: './profile.css',
  templateUrl: './profile.html',
})
export class Profile {
    canDeactivate(){
      return confirm("Do you want to leave this page?");
    }
}
