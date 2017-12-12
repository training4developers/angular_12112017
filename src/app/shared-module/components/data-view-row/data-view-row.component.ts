import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DataTableConfig } from '../../models/data-table-config';

@Component({
  selector: 'tr[data-view-row]',
  templateUrl: './data-view-row.component.html',
  styleUrls: ['./data-view-row.component.css']
})
export class DataViewRowComponent implements OnInit {

  @Input()
  public config: DataTableConfig = null;

  @Input()
  public item: any;

  @Output()
  public edit = new EventEmitter<number>();

  @Output()
  public delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
