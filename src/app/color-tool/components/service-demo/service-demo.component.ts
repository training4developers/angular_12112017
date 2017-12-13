import { Component, OnInit } from '@angular/core';

import { ColorsService } from '../../services/colors.service';

@Component({
  selector: 'service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css']
})
export class ServiceDemoComponent implements OnInit {

  constructor(private colorsSvc: ColorsService) { }

  ngOnInit() {
    this.colorsSvc.all().then(colors => console.log(colors));
  }

}
