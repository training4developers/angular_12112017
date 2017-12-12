import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  message = 'A message of hope, love and kindness.';

  doIt(num) {
    console.log('did it', num);
  }

  constructor() { }

  ngOnInit() {
  }

}
