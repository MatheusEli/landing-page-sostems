import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from "src/app/services/googleanalytics.service";

@Component({
    selector: 'lp-atendimentos-sociais',
    templateUrl: './atendimentos-sociais.component.html',
    styleUrls: ['./atendimentos-sociais.component.scss']
})
export class AtendimentosSociaisComponent{

  constructor(private router: Router, private googleAnalyticsService: GoogleAnalyticsService){}

  mudaBloco(): void{
    this.googleAnalyticsService.eventEmitter("lives", "engagement", "click", "click", 1);
    this.router
    .navigate(['transmissoes'])
    .then(() =>
      document
        .getElementById('transmissoes')
        .scrollIntoView({ behavior: 'smooth' })
    );
  }
}
