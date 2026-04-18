import { Component } from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
} from '@angular/material/expansion';
import { WillhabenLink } from '../willhaben-link/willhaben-link';
import { FabianGithub } from '../fabian-github/fabian-github';

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
export class Faq {
  call() {}
}
