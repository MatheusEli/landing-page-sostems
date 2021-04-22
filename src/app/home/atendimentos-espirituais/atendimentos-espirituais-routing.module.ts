import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AtendimentosEspirituaisComponent } from './atendimentos-espirituais.component';

const routes = [
  {
    path: '',
    component: AtendimentosEspirituaisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtendimentosEspirituaisRoutingModule {}
