import { Component } from '@angular/core';
import { FabianEmailAddress } from '../fabian-email-address/fabian-email-address.component';
import { RouterLink } from '@angular/router';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-impressum',
  imports: [FabianEmailAddress, RouterLink, MatCard, MatCardHeader, MatCardTitle, MatCardContent],
  templateUrl: './impressum.html',
  styleUrl: './impressum.css',
})
export class Impressum {}
