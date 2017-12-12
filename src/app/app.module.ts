import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ColorToolModule } from './color-tool/color-tool.module';
import { DemoToolModule } from './demo-tool/demo-tool.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ColorToolModule, DemoToolModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
