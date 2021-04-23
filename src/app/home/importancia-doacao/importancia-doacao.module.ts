import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormasAjudarModule } from '../formas-ajudar/formas-ajudar.module';
import { ImportanciaDoacaoRoutingModule } from './importancia-doacao-routing.module';
import { ImportanciaDoacaoComponent } from './importancia-doacao.component';

@NgModule({
  declarations: [ImportanciaDoacaoComponent],
  imports: [CommonModule, FormsModule, ImportanciaDoacaoRoutingModule, FormasAjudarModule]
})
export class ImportanciaDoacaoModule{}