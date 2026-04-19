import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

declare var gtag: any;

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  trackEvent(eventCategory: string, eventName: string) {
    if (environment.analyticsEnabled) {
      gtag('event', eventName, {
        // event type - example: 'SCROLL_TO_TOP_CLICKED'
        event_category: eventCategory,
        // the label that will show up in the dashboard as the events name
        event_label: eventName,
      });
    }
  }
}
