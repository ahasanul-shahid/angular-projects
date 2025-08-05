import { Component } from '@angular/core';
import { FAQS } from '../../core/data/faq.data';

interface IFaq {
  question: string;
  answer: string;
}
@Component({
  selector: 'app-faq-accordion',
  imports: [],
  templateUrl: './faq-accordion.component.html',
  styleUrl: './faq-accordion.component.scss',
})
export class FaqAccordionComponent {
  faqList: IFaq[] = FAQS;
  selectedQuestionIndex: number | null = null;
  onSelect(index: number): void {
    if (index === this.selectedQuestionIndex) {
      this.selectedQuestionIndex = null;
    } else {
      this.selectedQuestionIndex = index;
    }
  }
}
