import { Component, inject } from '@angular/core';
import { AnalyticsService } from '../analytics/AnalyticsService';
import { AnalyticsCategory } from '../config/analytics';
import { FabianEmailAddress } from '../fabian-email-address/fabian-email-address.component';
import { RouterLink } from '@angular/router';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-zahlung',
  imports: [
    RouterLink,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    FabianEmailAddress,
    NgOptimizedImage,
  ],
  templateUrl: './zahlung.html',
  styleUrl: './zahlung.css',
})
export class Zahlung {
  analyticsService: AnalyticsService = inject(AnalyticsService);
  readonly AnalyticsCategory = AnalyticsCategory;
}
