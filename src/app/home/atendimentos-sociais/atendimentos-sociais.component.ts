import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'lp-atendimentos-sociais',
    templateUrl: './atendimentos-sociais.component.html',
    styleUrls: ['./atendimentos-sociais.component.scss']
})
export class AtendimentosSociaisComponent{

  constructor(private router: Router){}

  mudaBloco(): void{
    this.router
    .navigate(['transmissoes'])
    .then(() =>
      document
        .getElementById('transmissoes')
        .scrollIntoView({ behavior: 'smooth' })
    );
  }
}
