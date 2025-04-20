import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
// import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [ CommonModule, RouterOutlet, CounterComponent ],  // , NavbarComponent
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title: string = 'first-app Sideral TI Angular';
  slogan: string = 'Sideral TI - Angular 19 - 2024';
  description: string = 'Angular 19 - Sideral TI - 2024'; 

  subTitle = 'Contador con estado de sessionStorage';

  counter: number = 0;

  users: string [] = ['Pepe', 'Juan', 'Luis', 'Ana', 'Maria', 'Pedro', 'Pablo', 'Javier', 'Diego', 'Sofia'];
  
  users1!: string [] ;
  users2?: string [] ;
  users3: string [] = [];


  visible: boolean = false;
  setVisible():void {
    this.visible = this.visible ? false : true;
    console.log(this.visible + ' Hemos hecho click en el botón');
  }

  setCounter(counter: number): void {
    this.counter = counter;
    console.log(this.counter + ' Hemos hecho click en el botón');
  }

  ngOnInit(): void {
    this.counter = parseInt(sessionStorage.getItem('counter')!);
  }
}