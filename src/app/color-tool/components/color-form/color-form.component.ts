import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Color } from '../../models/color';

@Component({
  selector: 'color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit, DoCheck {

  public formHeaderText = 'Color Form';
  public sampleObject = { id: 1, name: 'Bob' };
  public todayDate = new Date();
  public colorForm: FormGroup;

  @Input()
  buttonLabel = 'Save';

  @Output()
  submitColor = new EventEmitter<Color>();

  constructor(private fb: FormBuilder) {
    this.colorForm = this.fb.group({
      colorNameInput: '',
      colorHexCodeInput: '',
    });
  }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log('running change detection');
  }

  handleColorFormButtonClick() {
    this.submitColor.emit({
      name: this.colorForm.value.colorNameInput,
      hexCode: this.colorForm.value.colorHexCodeInput,
    });
  }

}
