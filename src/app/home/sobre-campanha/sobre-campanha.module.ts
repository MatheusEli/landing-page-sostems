import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SobreCampanhaRoutingModule } from './sobre-campanha-routing.module';
import { SobreCampanhaComponent } from './sobre-campanha.component';

@NgModule({
  declarations: [SobreCampanhaComponent],
  imports: [CommonModule, FormsModule, SobreCampanhaRoutingModule]
})
export class SobreCampanhaModule{}