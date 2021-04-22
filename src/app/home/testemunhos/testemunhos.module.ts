import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestemunhosRoutingModule } from './testemunhos-routing.module';
import { TestemunhosComponent } from './testemunhos.component';

@NgModule({
  declarations: [TestemunhosComponent],
  imports: [CommonModule, FormsModule, TestemunhosRoutingModule, ReactiveFormsModule]
})
export class TestemunhosModule{}