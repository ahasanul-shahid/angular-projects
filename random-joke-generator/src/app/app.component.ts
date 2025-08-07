import { Component } from '@angular/core';
import { RandomJokeGeneratorComponent } from './features/random-joke-generator/random-joke-generator.component';


@Component({
  selector: 'app-root',
  imports: [RandomJokeGeneratorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'random-joke-generator';
}
