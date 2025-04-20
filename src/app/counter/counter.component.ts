import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {

  counter: number = 0;

  @Input() title!: string;

  @Output() counterEmmit: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
      this.counter = (sessionStorage.getItem('counter') != undefined) ? parseInt(sessionStorage.getItem('counter')!) : 0;
      console.log('Creando el componente CounterComponent');
  }

  setCounter(): void {
    this.counter = this.counter + 1;
    // this.counter ++;
    console.log(this.counter + ' Hemos hecho click en el botón');

    sessionStorage.setItem('counter', this.counter.toString());

    this.counterEmmit.emit(this.counter);
  }


}
