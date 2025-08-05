import { Component } from '@angular/core';
import { FaqAccordionComponent } from './features/faq-accordion/faq-accordion.component';

@Component({
  selector: 'app-root',
  imports: [FaqAccordionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'faq-accordion';
}
