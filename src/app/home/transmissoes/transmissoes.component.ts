import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'lp-transmissoes',
    templateUrl: './transmissoes.component.html',
    styleUrls: ['./transmissoes.component.scss']
})
export class TransmissoesComponent{

  constructor(private router: Router){}

  mudaBloco(): void{
    this.router
    .navigate(['importancia-doacao'])
    .then(() =>
      document
        .getElementById('doacao')
        .scrollIntoView({ behavior: 'smooth' })
    );
  }
}
