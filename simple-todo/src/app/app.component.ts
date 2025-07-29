import { Component } from '@angular/core';
import { SimpleTodoComponent } from './features/simple-todo/simple-todo.component';

@Component({
  selector: 'app-root',
  imports: [SimpleTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simple-todo';
}
