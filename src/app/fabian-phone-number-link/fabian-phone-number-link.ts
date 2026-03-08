import { Component } from '@angular/core';

@Component({
  selector: 'app-fabian-phone-number-link',
  imports: [],
  templateUrl: './fabian-phone-number-link.html',
  styleUrl: './fabian-phone-number-link.css',
})
export class FabianPhoneNumberLink {
  encodedPhone = 'KzQzMTIzNDU2Nzg5'; // base64

  get phone() {
    return atob(this.encodedPhone);
  }
}
