import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { urls } from '../config/urls';
import { AnalyticsService } from '../analytics/AnalyticsService';
import { AnalyticsCategory } from '../config/analytics';

@Component({
  selector: 'app-willhaben-link',
  imports: [],
  templateUrl: './willhaben-link.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './willhaben-link.css',
})
export class WillhabenLink {
  analyticsService: AnalyticsService = inject(AnalyticsService);

  readonly urls = urls;
  protected readonly AnalyticsCategory = AnalyticsCategory;
}
