import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ CommonModule, RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'first-app Sideral TI Angular';
  slogan: string = 'Sideral TI - Angular 19 - 2024';
  description: string = 'Angular 19 - Sideral TI - 2024'; 
}