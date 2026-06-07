import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { WillhabenLink } from '../willhaben-link/willhaben-link';
import { urls } from '../config/urls';
import { AnalyticsService } from '../analytics/AnalyticsService';
import { AnalyticsCategory } from '../config/analytics';

@Component({
  selector: 'app-willhaben-banner',
  imports: [MatCardModule, MatButtonModule, MatIconModule, WillhabenLink],
  templateUrl: './willhaben-banner.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './willhaben-banner.css',
})
export class WillhabenBanner {
  analyticsService: AnalyticsService = inject(AnalyticsService);

  readonly urls = urls;
  readonly AnalyticsCategory = AnalyticsCategory;
}
