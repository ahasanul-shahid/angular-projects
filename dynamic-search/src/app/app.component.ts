import { Component } from '@angular/core';
import { DynamicSearchComponent } from './features/dynamic-search/dynamic-search.component';

@Component({
  selector: 'app-root',
  imports: [DynamicSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dynamic-search';
}
