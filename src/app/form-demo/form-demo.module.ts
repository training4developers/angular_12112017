import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ContactFormComponent, PhoneValidatorDirective } from './components/contact-form/contact-form.component';
import { ProductSupportFormComponent } from './components/product-support-form/product-support-form.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule,
  ],
  declarations: [ContactFormComponent, PhoneValidatorDirective, ProductSupportFormComponent],
  exports: [ContactFormComponent, ProductSupportFormComponent],
})
export class FormDemoModule { }
