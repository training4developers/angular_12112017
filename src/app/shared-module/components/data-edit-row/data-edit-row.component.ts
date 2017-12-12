import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DataTableConfig } from '../../models/data-table-config';

@Component({
  selector: 'tr[data-edit-row]',
  templateUrl: './data-edit-row.component.html',
  styleUrls: ['./data-edit-row.component.css']
})
export class DataEditRowComponent implements OnInit {

  public editColor: any;

  @Input()
  public config: DataTableConfig = null;

  @Input()
  public item: any;

  @Output()
  public save = new EventEmitter<any>();

  @Output()
  public cancel = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
    this.editColor = { ...this.item };
  }

}
