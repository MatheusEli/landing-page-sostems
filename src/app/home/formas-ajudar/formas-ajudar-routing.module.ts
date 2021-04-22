import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormasAjudarComponent } from './formas-ajudar.component';

const routes = [
  {
    path: '',
    component: FormasAjudarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormasAjudarRoutingModule {}
