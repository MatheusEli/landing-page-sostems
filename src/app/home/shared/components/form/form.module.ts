import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from '../vmessage/vmessage.module';
import { FormComponent } from './form.component';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, ReactiveFormsModule, VMessageModule],
  exports: [FormComponent]
})
export class FormModule{}
