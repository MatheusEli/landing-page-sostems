import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtendimentosSociaisRoutingModule } from './atendimentos-sociais-routing.module';
import { AtendimentosSociaisComponent } from './atendimentos-sociais.component';

@NgModule({
  declarations: [AtendimentosSociaisComponent],
  imports: [CommonModule, FormsModule, AtendimentosSociaisRoutingModule]
})
export class AtendimentosSociaisModule{}