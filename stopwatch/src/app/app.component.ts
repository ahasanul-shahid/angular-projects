import { Component } from '@angular/core';
import { StopwatchComponent } from './features/stopwatch/stopwatch.component';

@Component({
  selector: 'app-root',
  imports: [StopwatchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'stopwatch';
}
