import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormModule } from '../shared/components/form/form.module';
import { FormVideoModule } from '../shared/components/formVideo/form-video.module';
import { TestemunhosRoutingModule } from './testemunhos-routing.module';
import { TestemunhosComponent } from './testemunhos.component';

@NgModule({
  declarations: [TestemunhosComponent],
  imports: [CommonModule, FormsModule, TestemunhosRoutingModule,  FormModule, FormVideoModule]
})
export class TestemunhosModule{}