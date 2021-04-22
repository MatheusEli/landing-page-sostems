import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImportanciaDoacaoComponent } from './importancia-doacao.component';

const routes = [
  {
    path: '',
    component: ImportanciaDoacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportanciaDoacaoRoutingModule {}
