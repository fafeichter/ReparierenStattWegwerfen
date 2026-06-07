import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { FabianEmailAddress } from '../fabian-email-address/fabian-email-address.component';
import { RouterLink } from '@angular/router';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { AnalyticsService } from '../analytics/AnalyticsService';
import { AnalyticsCategory } from '../config/analytics';

@Component({
  selector: 'app-impressum',
  imports: [FabianEmailAddress, RouterLink, MatCard, MatCardHeader, MatCardTitle, MatCardContent],
  templateUrl: './impressum.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './impressum.css',
})
export class Impressum {
  analyticsService: AnalyticsService = inject(AnalyticsService);
  readonly AnalyticsCategory = AnalyticsCategory;
}
