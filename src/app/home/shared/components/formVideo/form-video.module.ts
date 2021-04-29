import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';
import { VMessageModule } from '../vmessage/vmessage.module';
import { FormVideoComponent } from './form-video.component';

@NgModule({
  declarations: [FormVideoComponent],
  imports: [CommonModule, ReactiveFormsModule, VMessageModule, NgxLoadingModule.forRoot({})],
  exports: [FormVideoComponent]
})
export class FormVideoModule{}
