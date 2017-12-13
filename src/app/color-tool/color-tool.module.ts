import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModuleModule } from '../shared-module/shared-module.module';
import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ColorFormComponent } from './components/color-form/color-form.component';
import { MyUpperCasePipe } from './pipes/my-upper-case.pipe';
import { MyAppendPipe } from './pipes/my-append.pipe';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, SharedModuleModule,
  ],
  declarations: [ColorHomeComponent, ColorFormComponent, MyUpperCasePipe, MyAppendPipe],
  exports: [ColorHomeComponent],
})
export class ColorToolModule { }
