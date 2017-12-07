import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Color } from '../../models/color';

@Component({
  selector: 'color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent {

  public headerText = 'Color Tool!';

  public colorTemplateForm = {
    colorName: '',
    colorHexCode: '',
  };

  public colorReactiveForm: FormGroup;

  public colors: Color[] = [
    { id: 1, name: 'red', hexCode: '#FF0000' },
    { id: 2, name: 'hot pink', hexCode: '#FF69B4' },
  ];


  // private fb: FormBuilder;

  // constructor(fb: FormBuilder) {
  //   this.fb = fb;
  // }

  constructor(private fb: FormBuilder) {

    this.colorReactiveForm = this.fb.group({
      colorNameInput: '',
      colorHexCodeInput: '',
    });

  }

  public showTemplateForm() {
    console.log(this.colorTemplateForm);
  }

  public showReactiveForm() {
    console.log(this.colorReactiveForm.value);
  }

}
