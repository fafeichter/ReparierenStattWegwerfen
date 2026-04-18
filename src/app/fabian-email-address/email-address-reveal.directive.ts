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
  selector: '[appEmailReveal]',
})
export class EmailAddressRevealDirective implements OnInit {
  @Input('appEmailReveal') encodedEmail = ''; // Base64-kodierte E-Mail Adresse

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return; // SSR: nichts tun

    let link = this.el.nativeElement;
    this.renderer.setProperty(link, 'textContent', 'E-Mail anzeigen');
    const unlisten = this.renderer.listen(link, 'click', (event: Event) => {
      event.preventDefault();

      this.revealEmail(link);

      // remove the click handler so default behavior works next time
      unlisten();
    });
  }

  private revealEmail(link: HTMLElement) {
    const email = atob(this.encodedEmail);

    this.renderer.setProperty(link, 'textContent', email);
    this.renderer.setAttribute(link, 'href', 'mailto:' + email);
  }
}
