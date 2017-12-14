import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ColorFormComponent } from './components/color-form/color-form.component';
import { MyUpperCasePipe } from './pipes/my-upper-case.pipe';
import { MyAppendPipe } from './pipes/my-append.pipe';
import { ColorsService } from './services/colors.service';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    SharedModule, HttpClientModule,
  ],
  declarations: [
    ColorHomeComponent, ColorFormComponent, MyUpperCasePipe,
    MyAppendPipe,
  ],
  exports: [ColorHomeComponent],
  providers: [
    { provide: ColorsService, useClass: ColorsService },
  ],
})
export class ColorToolModule { }
