import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { WillhabenLink } from '../willhaben-link/willhaben-link';

@Component({
  selector: 'app-willhaben-banner',
  imports: [MatCardModule, MatButtonModule, MatIconModule, WillhabenLink],
  templateUrl: './willhaben-banner.html',
  styleUrl: './willhaben-banner.css',
})
export class WillhabenBanner {}
