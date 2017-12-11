import { Component, OnInit, Input } from '@angular/core';

import { DataTableConfig } from '../../models/data-table-config';

@Component({
  selector: 'tr[data-view-row]',
  templateUrl: './data-table-row.component.html',
  styleUrls: ['./data-table-row.component.css']
})
export class DataTableRowComponent implements OnInit {

  @Input()
  public config: DataTableConfig = null;

  @Input()
  public item: any;

  constructor() { }

  ngOnInit() {
  }

}
