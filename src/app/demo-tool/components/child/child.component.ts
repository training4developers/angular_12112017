import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'demo-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  someMessage = '';

  @Output()
  goForIt = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
