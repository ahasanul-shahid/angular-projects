import { Component } from '@angular/core';
import { RockPaperScissorsComponent } from './features/rock-paper-scissors/rock-paper-scissors.component';

@Component({
  selector: 'app-root',
  imports: [RockPaperScissorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rock-paper-scissors';
}
