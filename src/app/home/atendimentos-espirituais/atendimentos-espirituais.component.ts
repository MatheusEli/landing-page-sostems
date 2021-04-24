import { Router } from '@angular/router';
import { Component } from "@angular/core";

@Component({
    selector: 'lp-atendimentos-espirituais',
    templateUrl: './atendimentos-espirituais.component.html',
    styleUrls: ['./atendimentos-espirituais.component.scss']
})
export class AtendimentosEspirituaisComponent{

  constructor(private router: Router){}

  mudaBloco(): void{
    this.router
    .navigate(['atendimentos-sociais'])
    .then(() =>
      document
        .getElementById('atendimentos-sociais')
        .scrollIntoView({ behavior: 'smooth' })
    );
  }
}
