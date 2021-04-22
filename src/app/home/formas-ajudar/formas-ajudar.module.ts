import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormasAjudarRoutingModule } from './formas-ajudar-routing.module';
import { FormasAjudarComponent } from './formas-ajudar.component';

@NgModule({
  declarations: [FormasAjudarComponent],
  imports: [CommonModule, FormsModule, FormasAjudarRoutingModule]
})
export class FormasAjudarModule{}