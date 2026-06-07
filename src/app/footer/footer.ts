import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { AnalyticsService } from '../analytics/AnalyticsService';
import { AnalyticsCategory } from '../config/analytics';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './footer.css',
})
export class Footer {
  analyticsService: AnalyticsService = inject(AnalyticsService);
  readonly AnalyticsCategory = AnalyticsCategory;
}
