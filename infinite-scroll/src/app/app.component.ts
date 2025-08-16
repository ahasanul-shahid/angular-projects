import { Component } from '@angular/core';
import { InfiniteScrollComponent } from './features/infinite-scroll/infinite-scroll.component';

@Component({
  selector: 'app-root',
  imports: [InfiniteScrollComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'infinite-scroll';
}
