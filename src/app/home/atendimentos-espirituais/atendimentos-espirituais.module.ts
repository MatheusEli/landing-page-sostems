import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtendimentosEspirituaisRoutingModule } from './atendimentos-espirituais-routing.module';
import { AtendimentosEspirituaisComponent } from './atendimentos-espirituais.component';

@NgModule({
  declarations: [AtendimentosEspirituaisComponent],
  imports: [CommonModule, FormsModule, AtendimentosEspirituaisRoutingModule]
})
export class AtendimentosEspirituaisModule{}