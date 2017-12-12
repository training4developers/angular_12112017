import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataTableConfig } from './models/data-table-config';
import { DataColConfig } from './models/data-col-config';

import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataViewRowComponent } from './components/data-view-row/data-view-row.component';
import { DataEditRowComponent } from './components/data-edit-row/data-edit-row.component';

export { DataTableConfig, DataColConfig };

@NgModule({
  imports: [
    CommonModule, FormsModule,
  ],
  declarations: [ToolHeaderComponent, DataTableComponent, DataViewRowComponent, DataEditRowComponent],
  exports: [ToolHeaderComponent, DataTableComponent],
})
export class SharedModuleModule { }
