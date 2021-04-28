import { Router } from '@angular/router';
import { Component } from "@angular/core";
import { GoogleAnalyticsService } from 'src/app/services/googleanalytics.service';

@Component({
    selector: 'lp-atendimentos-espirituais',
    templateUrl: './atendimentos-espirituais.component.html',
    styleUrls: ['./atendimentos-espirituais.component.scss']
})
export class AtendimentosEspirituaisComponent{

  constructor(private router: Router, private googleAnalyticsService: GoogleAnalyticsService){}

  mudaBloco(): void{
    this.googleAnalyticsService.eventEmitter("projetos", "engagement", "click", "click", 1);
    this.router
    .navigate(['atendimentos-sociais'])
    .then(() =>
      document
        .getElementById('atendimentos-sociais')
        .scrollIntoView({ behavior: 'smooth' })
    );
  }
}
