import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransmissoesRoutingModule } from './transmissoes-routing.module';
import { TransmissoesComponent } from './transmissoes.component';

@NgModule({
  declarations: [TransmissoesComponent],
  imports: [CommonModule, FormsModule, TransmissoesRoutingModule]
})
export class TransmissoesModule{}
