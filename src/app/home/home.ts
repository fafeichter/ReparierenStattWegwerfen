import { Component } from '@angular/core';
import { Faq } from '../faq/faq';
import { MacbookQuote } from '../macbook-quote/macbook-quote';
import { WillhabenBanner } from '../willhaben-banner/willhaben-banner';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [Faq, MacbookQuote, WillhabenBanner, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
