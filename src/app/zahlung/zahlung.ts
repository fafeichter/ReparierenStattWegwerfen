import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { AnalyticsService } from '../analytics/AnalyticsService';
import { AnalyticsCategory } from '../config/analytics';
import { FabianEmailAddress } from '../fabian-email-address/fabian-email-address.component';
import { RouterLink } from '@angular/router';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { urls } from '../config/urls';

@Component({
  selector: 'app-zahlung',
  imports: [RouterLink, MatCard, MatCardHeader, MatCardTitle, MatCardContent, FabianEmailAddress],
  templateUrl: './zahlung.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './zahlung.css',
})
export class Zahlung {
  analyticsService: AnalyticsService = inject(AnalyticsService);
  readonly urls = urls;
  readonly AnalyticsCategory = AnalyticsCategory;
}
