import { Component } from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
} from '@angular/material/expansion';
import { WillhabenLink } from '../willhaben-link/willhaben-link';
import { FabianPhoneNumberLink } from '../fabian-phone-number-link/fabian-phone-number-link';

@Component({
  selector: 'app-faq',
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    WillhabenLink,
    FabianPhoneNumberLink,
  ],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  call() {}
}
