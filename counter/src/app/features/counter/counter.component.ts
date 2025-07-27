import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  imports: [FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counter = 0;
  stepValue = 1;
  incrementCounter(){
    this.counter += +this.stepValue;
  }
  decrementCounter(){
    this.counter -= +this.stepValue;
  }
}
