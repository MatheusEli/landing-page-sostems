import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { SobreCampanhaComponent } from './sobre-campanha/sobre-campanha.component';
import { SobreCasaComponent } from "./sobre-casa/sobre-casa.component";
import { AtendimentosEspirituaisComponent } from "./atendimentos-espirituais/atendimentos-espirituais.component";
import { AtendimentosSociaisComponent } from "./atendimentos-sociais/atendimentos-sociais.component";
import { TransmissoesComponent } from "./transmissoes/transmissoes.component";
import { ImportanciaDoacaoComponent } from "./importancia-doacao/importancia-doacao.component";
import { FormasAjudarComponent } from "./formas-ajudar/formas-ajudar.component";
import { TestemunhosComponent } from "./testemunhos/testemunhos.component";

@NgModule({
    declarations: [HomeComponent, SobreCampanhaComponent, SobreCasaComponent, AtendimentosEspirituaisComponent, AtendimentosSociaisComponent, TransmissoesComponent, ImportanciaDoacaoComponent, FormasAjudarComponent, TestemunhosComponent],
    imports: [CommonModule, FormsModule, HomeRoutingModule, ReactiveFormsModule]
})
export class HomeModule{}
