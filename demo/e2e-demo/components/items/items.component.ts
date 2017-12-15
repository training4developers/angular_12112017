import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'e2e-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  public newItem = '';

  public items = [ 'item 1', 'item 2', 'item 3' ];

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.items = this.items.concat(this.newItem);
    this.newItem = '';
  }

}
