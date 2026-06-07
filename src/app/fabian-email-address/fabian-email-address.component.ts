import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EmailAddressRevealDirective } from './email-address-reveal.directive';

@Component({
  selector: 'app-fabian-email-address',
  imports: [EmailAddressRevealDirective],
  templateUrl: './fabian-email-address.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './fabian-email-address.component.css',
})
export class FabianEmailAddress {
  encodedEmail = 'ZmFiaWFuQHJlcGFyaWVyZW4tc3RhdHQtd2Vnd2VyZmVuLmF0'; // Base64
}
