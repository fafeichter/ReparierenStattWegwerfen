import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { FabianEmailAddress } from '../fabian-email-address/fabian-email-address.component';
import { RouterLink } from '@angular/router';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { AnalyticsService } from '../analytics/AnalyticsService';
import { AnalyticsCategory } from '../config/analytics';
import { MatIcon } from '@angular/material/icon';
import { MatFabButton, MatIconButton } from '@angular/material/button';
import { CdkCopyToClipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-impressum',
  imports: [
    FabianEmailAddress,
    RouterLink,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatIcon,
    MatFabButton,
    CdkCopyToClipboard,
    MatIconButton,
  ],
  templateUrl: './impressum.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './impressum.css',
})
export class Impressum {
  analyticsService: AnalyticsService = inject(AnalyticsService);
  readonly AnalyticsCategory = AnalyticsCategory;

  protected address() {
    return 'Fabian Feichter\n' + 'Heinzelgasse 13/7\n' + '9020 Klagenfurt\n' + 'Österreich';
  }
}
