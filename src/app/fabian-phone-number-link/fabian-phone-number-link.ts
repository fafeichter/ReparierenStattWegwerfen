import { Component } from '@angular/core';
import { PhoneRevealDirective } from './phone-reveal.directive';

@Component({
  selector: 'app-fabian-phone-number-link',
  imports: [PhoneRevealDirective],
  templateUrl: './fabian-phone-number-link.html',
  styleUrl: './fabian-phone-number-link.css',
})
export class FabianPhoneNumberLink {
  encodedPhone = 'KzQzMTIzNDU2Nzg5'; // base64
}
