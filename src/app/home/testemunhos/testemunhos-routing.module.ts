import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestemunhosComponent } from './testemunhos.component';

const routes = [
  {
    path: '',
    component: TestemunhosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestemunhosRoutingModule {}
