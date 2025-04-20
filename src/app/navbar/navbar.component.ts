// navbar.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'Pizza Delicious';
  
  // Método para controlar el menú hamburguesa en móviles
  isCollapsed = true;
  
  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }
}