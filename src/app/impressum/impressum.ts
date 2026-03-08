import { Component } from '@angular/core';
import { FabianPhoneNumberLink } from '../fabian-phone-number-link/fabian-phone-number-link';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-impressum',
  imports: [FabianPhoneNumberLink, RouterLink],
  templateUrl: './impressum.html',
  styleUrl: './impressum.css',
})
export class Impressum {}
