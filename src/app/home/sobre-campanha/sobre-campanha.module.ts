import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SobreCasaModule } from '../sobre-casa/sobre-casa.module';
import { SobreCampanhaRoutingModule } from './sobre-campanha-routing.module';
import { SobreCampanhaComponent } from './sobre-campanha.component';

@NgModule({
  declarations: [SobreCampanhaComponent],
  imports: [CommonModule, FormsModule, SobreCampanhaRoutingModule, SobreCasaModule]
})
export class SobreCampanhaModule{}