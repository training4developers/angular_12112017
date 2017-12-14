import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ColorToolModule } from './color-tool/color-tool.module';
import { FormDemoModule } from './form-demo/form-demo.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ColorToolModule, FormDemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// '^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$'
