import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactFormComponent, PhoneValidatorDirective } from './components/contact-form/contact-form.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
  ],
  declarations: [ContactFormComponent, PhoneValidatorDirective],
  exports: [ContactFormComponent],
})
export class FormDemoModule { }
