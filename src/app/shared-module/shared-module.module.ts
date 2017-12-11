import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableConfig } from './models/data-table-config';
import { DataColConfig } from './models/data-col-config';

import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { DataTableComponent } from './components/data-table/data-table.component';

export { DataTableConfig, DataColConfig };

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToolHeaderComponent, DataTableComponent],
  exports: [ToolHeaderComponent, DataTableComponent],
})
export class SharedModuleModule { }
