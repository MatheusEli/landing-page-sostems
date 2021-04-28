import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from "src/app/services/googleanalytics.service";

@Component({
    selector: 'lp-sobre-casa',
    templateUrl: './sobre-casa.component.html',
    styleUrls: ['./sobre-casa.component.scss']
})
export class SobreCasaComponent{

  constructor(private router: Router, private googleAnalyticsService: GoogleAnalyticsService){}

  mudaBloco(): void{
    this.googleAnalyticsService.eventEmitter("atendimentos", "engagement", "click", "click", 1);
    this.router
    .navigate(['atendimentos-espirituais'])
    .then(() =>
      document
        .getElementById('atendimentos-espirituais')
        .scrollIntoView({ behavior: 'smooth' })
    );
  }
}
