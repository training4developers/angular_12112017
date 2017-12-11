import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolHeaderComponent } from './components/tool-header/tool-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToolHeaderComponent],
  exports: [ToolHeaderComponent],
})
export class SharedModuleModule { }
