import { AfterViewInit, Component, inject, QueryList, ViewChildren } from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
} from '@angular/material/expansion';
import { WillhabenLink } from '../willhaben-link/willhaben-link';
import { FabianGithub } from '../fabian-github/fabian-github';
import { AnalyticsService } from '../analytics/AnalyticsService';
import { AnalyticsCategory } from '../config/analytics';

@Component({
  selector: 'app-faq',
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    WillhabenLink,
    FabianGithub,
  ],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq implements AfterViewInit {
  @ViewChildren(MatExpansionPanel)
  panels!: QueryList<MatExpansionPanel>;

  faqTitles = [
    'Was ist „Reparieren Statt Wegwerfen“?',
    'Wie funktioniert „Reparieren Statt Wegwerfen“?',
    'Wo kann man die MacBooks kaufen?',
    'Wie viel kosten die MacBooks?',
    'Gibt es eine Garantie?',
    'In welchem Zustand sind die MacBooks?',
    'Warum von uns kaufen und nicht privat?',
    'Warum nicht bei Refurbed und Co. kaufen?',
    'Wer steckt hinter „Reparieren Statt Wegwerfen“?',
  ];

  analyticsService: AnalyticsService = inject(AnalyticsService);

  ngAfterViewInit(): void {
    this.panels.forEach((panel, index) => {
      panel.opened.subscribe(() => {
        this.questionOpened(this.faqTitles[index]);
      });
    });
  }

  questionOpened(question: string) {
    this.analyticsService.trackEvent(
      AnalyticsCategory.FAQ_COLLAPSABLE_OPENED,
      '"' + question + '"' + ' collapsable opened',
    );
  }
}
