import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SobreCasaRoutingModule } from './sobre-casa-routing.module';
import { SobreCasaComponent } from './sobre-casa.component';

@NgModule({
  declarations: [SobreCasaComponent],
  imports: [CommonModule, FormsModule, SobreCasaRoutingModule]
})
export class SobreCasaModule{}