import { Component, OnInit, Input } from '@angular/core';

import { DataTableConfig } from '../../models/data-table-config';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input()
  config: DataTableConfig = null;

  @Input()
  data: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
