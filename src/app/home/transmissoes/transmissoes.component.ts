import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from "src/app/services/googleanalytics.service";

@Component({
    selector: 'lp-transmissoes',
    templateUrl: './transmissoes.component.html',
    styleUrls: ['./transmissoes.component.scss']
})
export class TransmissoesComponent{

  constructor(private router: Router, private googleAnalyticsService: GoogleAnalyticsService){}

  mudaBloco(): void{
    this.googleAnalyticsService.eventEmitter("como-ajudar", "engagement", "click", "click", 1);
    this.router
    .navigate(['importancia-doacao'])
    .then(() =>
      document
        .getElementById('doacao')
        .scrollIntoView({ behavior: 'smooth' })
    );
  }
}
