import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'lp-formas-ajudar',
    templateUrl: './formas-ajudar.component.html',
    styleUrls: ['./formas-ajudar.component.scss']
})
export class FormasAjudarComponent{

  constructor(private router: Router){}

  mudaBloco(): void{
    this.router
    .navigate(['testemunhos'])
    .then(() =>
      document
        .getElementById('testemunhos')
        .scrollIntoView({ behavior: 'smooth' })
    );
  }
}
