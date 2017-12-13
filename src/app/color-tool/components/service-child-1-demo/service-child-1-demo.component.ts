import { Component, OnInit } from '@angular/core';

import { ColorsService } from '../../services/colors.service';



@Component({
  selector: 'service-child-1-demo',
  templateUrl: './service-child-1-demo.component.html',
  styleUrls: ['./service-child-1-demo.component.css'],
})
export class ServiceChild1DemoComponent implements OnInit {

  constructor(private colorsSvc: ColorsService) { }

  ngOnInit() {
  }

}
