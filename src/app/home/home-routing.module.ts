import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'atendimentos-espirituais'
    },
    {
      path: 'atendimentos-espirituais',
      loadChildren: () => import('./atendimentos-espirituais/atendimentos-espirituais.module').then(m => m.AtendimentosEspirituaisModule)
    },
    {
      path: 'atendimentos-sociais',
      loadChildren: () => import('./atendimentos-sociais/atendimentos-sociais.module').then(m => m.AtendimentosSociaisModule)
    },
    {
      path: 'sobre-campanha',
      loadChildren: () => import('./sobre-campanha/sobre-campanha.module').then(m => m.SobreCampanhaModule)
    },
    {
      path: 'sobre-casa',
      loadChildren: () => import('./sobre-casa/sobre-casa.module').then(m => m.SobreCasaModule)
    },
    {
      path: 'transmissoes',
      loadChildren: () => import('./transmissoes/transmissoes.module').then(m => m.TransmissoesModule)
    },
    {
      path: 'testemunhos',
      loadChildren: () => import('./testemunhos/testemunhos.module').then(m => m.TestemunhosModule)
    },
    {
      path: 'importancia-doacao',
      loadChildren: () => import('./importancia-doacao/importancia-doacao.module').then(m => m.ImportanciaDoacaoModule)
    },
    {
      path: 'formas-ajudar',
      loadChildren: () => import('./formas-ajudar/formas-ajudar.module').then(m => m.FormasAjudarModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
