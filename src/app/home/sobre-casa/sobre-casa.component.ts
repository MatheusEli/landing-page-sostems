import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'lp-sobre-casa',
    templateUrl: './sobre-casa.component.html',
    styleUrls: ['./sobre-casa.component.scss']
})
export class SobreCasaComponent{

  constructor(private router: Router){}

  mudaBloco(): void{
    this.router
    .navigate(['atendimentos-espirituais'])
    .then(() =>
      document
        .getElementById('atendimentos-espirituais')
        .scrollIntoView({ behavior: 'smooth' })
    );
  }
}
