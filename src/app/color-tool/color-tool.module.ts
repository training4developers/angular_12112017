import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorHomeComponent } from './components/color-home/color-home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ColorHomeComponent],
  exports: [ColorHomeComponent],
})
export class ColorToolModule { }
