import { Component } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public loading = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-5R4LSDRPP6', {
          page_path: event.urlAfterRedirects,
        });
      }
    });
  }

  toSobre(): void {
    this.closeNav();
    this.router
      .navigate(['sobre-campanha'])
      .then(() =>
        document
          .getElementById('campanha')
          .scrollIntoView({ behavior: 'smooth' })
      );
  }
  toAtendimentos(): void {
    this.closeNav();
    this.router
      .navigate(['atendimentos-espirituais'])
      .then(() =>
        document
          .getElementById('atendimentos-espirituais')
          .scrollIntoView({ behavior: 'smooth' })
      );
  }
  toProjetos(): void {
    this.closeNav();
    this.router
      .navigate(['atendimentos-sociais'])
      .then(() =>
        document
          .getElementById('atendimentos-sociais')
          .scrollIntoView({ behavior: 'smooth' })
      );
  }
  toTransmissoes(): void {
    this.closeNav();
    this.router
      .navigate(['transmissoes'])
      .then(() =>
        document
          .getElementById('transmissoes')
          .scrollIntoView({ behavior: 'smooth' })
      );
  }
  toDoacoes(): void {
    this.closeNav();
    this.router
      .navigate(['importancia-doacao'])
      .then(() =>
        document.getElementById('doacao').scrollIntoView({ behavior: 'smooth' })
      );
  }
  toTestemunhos(): void {
    this.closeNav();
    this.router
      .navigate(['testemunhos'])
      .then(() =>
        document
          .getElementById('testemunhos')
          .scrollIntoView({ behavior: 'smooth' })
      );
  }

  openNav(): void {
    document.getElementById('mySidenav').style.width = '250px';
  }

  closeNav(): void {
    document.getElementById('mySidenav').style.width = '0';
  }
}
