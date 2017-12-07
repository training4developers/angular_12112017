import { Component } from '@angular/core';

import { Color } from '../../models/color';

@Component({
  selector: 'color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent {

  public headerText = 'Color Tool!';

  public colors: Color[] = [
    { id: 1, name: 'red', hexCode: '#FF0000' },
    { id: 2, name: 'hot pink', hexCode: '#FF69B4' },
  ];


}
