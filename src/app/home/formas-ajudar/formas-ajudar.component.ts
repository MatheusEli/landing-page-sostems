import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from "src/app/services/googleanalytics.service";

@Component({
    selector: 'lp-formas-ajudar',
    templateUrl: './formas-ajudar.component.html',
    styleUrls: ['./formas-ajudar.component.scss']
})
export class FormasAjudarComponent{

  constructor(private router: Router, private googleAnalyticsService: GoogleAnalyticsService){}

  mudaBloco(): void{
    this.googleAnalyticsService.eventEmitter("testemunhos", "engagement", "click", "click", 1);
    this.router
    .navigate(['testemunhos'])
    .then(() =>
      document
        .getElementById('testemunhos')
        .scrollIntoView({ behavior: 'smooth' })
    );
  }
}
