import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModuleModule } from '../shared-module/shared-module.module';
import { ColorHomeComponent } from './components/color-home/color-home.component';
import { ColorFormComponent } from './components/color-form/color-form.component';
import { MyUpperCasePipe } from './pipes/my-upper-case.pipe';
import { MyAppendPipe } from './pipes/my-append.pipe';
import { ServiceDemoComponent } from './components/service-demo/service-demo.component';
import { ColorsService } from './services/colors.service';
import { ServiceChild1DemoComponent } from './components/service-child-1-demo/service-child-1-demo.component';
import { ServiceChild2DemoComponent } from './components/service-child-2-demo/service-child-2-demo.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    SharedModuleModule, HttpClientModule,
  ],
  declarations: [
    ColorHomeComponent, ColorFormComponent, MyUpperCasePipe,
    MyAppendPipe, ServiceDemoComponent, ServiceChild1DemoComponent, ServiceChild2DemoComponent,
  ],
  exports: [ColorHomeComponent, ServiceDemoComponent],
  providers: [ { provide: ColorsService, useClass: ColorsService } ],
})
export class ColorToolModule { }
