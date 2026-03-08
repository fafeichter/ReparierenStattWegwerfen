import { Component } from '@angular/core';
import { Faq } from '../faq/faq';
import { MacbookQuote } from '../macbook-quote/macbook-quote';
import { RouterLink } from '@angular/router';
import { WillhabenBanner } from '../willhaben-banner/willhaben-banner';

@Component({
  selector: 'app-home',
  imports: [Faq, MacbookQuote, RouterLink, WillhabenBanner],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
