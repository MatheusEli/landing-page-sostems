import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) { }

  toSobre(): void {
    this.router.navigate(['sobre-campanha']).then(() => document.getElementById("campanha").scrollIntoView({ behavior: 'smooth' }));

  }
  toAtendimentos(): void {
    this.router.navigate(['atendimentos-espirituais']).then(() => document.getElementById("atendimentos-espirituais").scrollIntoView({ behavior: 'smooth' }));
  }
  toProjetos(): void {
    this.router.navigate(['atendimentos-sociais']).then( ()=> document.getElementById("atendimentos-sociais").scrollIntoView({ behavior: 'smooth' }));
  }
  toTransmissoes(): void {
    this.router.navigate(['transmissoes']).then(() => document.getElementById("transmissoes").scrollIntoView({ behavior: 'smooth' }));
  }
  toDoacoes(): void {
    this.router.navigate(['importancia-doacao']).then( ()=> document.getElementById("doacao").scrollIntoView({ behavior: 'smooth' }));
  }
  toTestemunhos(): void {
    this.router.navigate(['testemunhos']).then(() => document.getElementById("testemunhos").scrollIntoView({ behavior: 'smooth' }));
  }
}
