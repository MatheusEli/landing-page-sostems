import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImportanciaDoacaoRoutingModule } from './importancia-doacao-routing.module';
import { ImportanciaDoacaoComponent } from './importancia-doacao.component';

@NgModule({
  declarations: [ImportanciaDoacaoComponent],
  imports: [CommonModule, FormsModule, ImportanciaDoacaoRoutingModule]
})
export class ImportanciaDoacaoModule{}