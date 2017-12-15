import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/items/items.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
  ],
  declarations: [HomeComponent, ItemsComponent],
  exports: [HomeComponent, ItemsComponent],
})
export class E2eDemoModule { }
