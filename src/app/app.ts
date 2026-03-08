import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { WillhabenBanner } from './willhaben-banner/willhaben-banner';
import { MacbookQuote } from './macbook-quote/macbook-quote';
import { Faq } from './faq/faq';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatExpansionModule, MatCardModule, WillhabenBanner, MacbookQuote, Faq],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
