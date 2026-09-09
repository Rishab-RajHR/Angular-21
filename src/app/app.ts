import { Component, signal } from '@angular/core';
import { PipeShortNamePipe } from './pipe/pipe-short-name-pipe';
import { ConvertPipe } from './pipe/convert-pipe';
import { CommonModule } from '@angular/common';

@Component({
  imports: [PipeShortNamePipe,ConvertPipe,CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
   fullName = "Alex Pandian"

   usd = 10;
   usdToInr = 85;
}
