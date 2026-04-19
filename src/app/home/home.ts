import { Component, inject } from '@angular/core';
import { Faq } from '../faq/faq';
import { MacbookQuote } from '../macbook-quote/macbook-quote';
import { RouterLink } from '@angular/router';
import { WillhabenBanner } from '../willhaben-banner/willhaben-banner';
import { AnalyticsService } from '../analytics/AnalyticsService';
import { AnalyticsCategory } from '../config/analytics';

@Component({
  selector: 'app-home',
  imports: [Faq, MacbookQuote, RouterLink, WillhabenBanner],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  analyticsService: AnalyticsService = inject(AnalyticsService);
  readonly AnalyticsCategory = AnalyticsCategory;
}
