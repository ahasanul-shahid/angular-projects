import { Component } from '@angular/core';
import { TicTacToeComponent } from './features/tic-tac-toe/tic-tac-toe.component';

@Component({
  selector: 'app-root',
  imports: [TicTacToeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tic-tac-toe';
}
