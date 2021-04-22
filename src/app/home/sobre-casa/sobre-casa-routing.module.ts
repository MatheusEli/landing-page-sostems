import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SobreCasaComponent } from './sobre-casa.component';

const routes = [
  {
    path: '',
    component: SobreCasaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobreCasaRoutingModule {}
