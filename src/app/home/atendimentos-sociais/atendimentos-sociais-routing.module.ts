import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AtendimentosSociaisComponent } from './atendimentos-sociais.component';

const routes = [
  {
    path: '',
    component: AtendimentosSociaisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtendimentosSociaisRoutingModule {}
