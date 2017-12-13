import { Component, OnInit } from '@angular/core';

import { ColorsService } from '../../services/colors.service';

@Component({
  selector: 'service-child-2-demo',
  templateUrl: './service-child-2-demo.component.html',
  styleUrls: ['./service-child-2-demo.component.css']
})
export class ServiceChild2DemoComponent implements OnInit {

  constructor(private colorsSvc: ColorsService) { }

  ngOnInit() {
  }

}
