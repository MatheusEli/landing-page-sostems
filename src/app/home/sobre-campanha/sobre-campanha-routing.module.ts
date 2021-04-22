import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SobreCampanhaComponent } from './sobre-campanha.component';

const routes = [
  {
    path: '',
    component: SobreCampanhaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobreCampanhaRoutingModule {}
