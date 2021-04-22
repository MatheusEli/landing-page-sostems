import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransmissoesComponent } from './transmissoes.component';

const routes = [
  {
    path: '',
    component: TransmissoesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransmissoesRoutingModule {}
