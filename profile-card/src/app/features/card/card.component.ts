import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  name = '';
  age : number | null = null;
  description = '';

  validAge(){
    if(typeof(this.age) !== 'number') return '';
    return this.age >= 0 && this.age <= 100 ? this.age : 'invalid age'; 
  }
}
