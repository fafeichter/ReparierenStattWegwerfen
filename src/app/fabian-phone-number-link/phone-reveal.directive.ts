import {
  Directive,
  ElementRef,
  Inject,
  Input,
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appPhoneReveal]',
})
export class PhoneRevealDirective implements OnInit {
  @Input('appPhoneReveal') encodedPhone = ''; // Base64-kodierte Telefonnummer

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return; // SSR: nichts tun

    // Button erstellen
    let link = this.el.nativeElement;
    this.renderer.setProperty(link, 'textContent', 'Telefonnummer anzeigen');
    const unlisten = this.renderer.listen(link, 'click', (event: Event) => {
      event.preventDefault();

      this.revealPhone(link);

      // remove the click handler so default behavior works next time
      unlisten();
    });
  }

  private revealPhone(link: HTMLElement) {
    const phone = atob(this.encodedPhone);

    // Link entfernen
    //this.renderer.removeChild(this.el.nativeElement, link);

    // tel:-Link setzen
    this.renderer.setProperty(link, 'textContent', phone);
    this.renderer.setAttribute(link, 'href', 'tel:' + phone);
    //  this.renderer.appendChild(this.el.nativeElement, link);
  }
}
