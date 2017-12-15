import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { Color, ColorEvent } from '../../models/color';

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

  @Input()
  resetForm: Observable<void>;

  @Output()
  submitColor = new EventEmitter<ColorEvent>();

  constructor(private fb: FormBuilder) {
    this.colorForm = this.fb.group({
      colorNameInput: '',
      colorHexCodeInput: '',
    });
  }

  ngOnInit() {
    this.resetForm.subscribe(() => {
      this.colorForm.reset();
    });
  }

  ngDoCheck() {
    console.log('running change detection');
  }

  handleColorFormButtonClick() {

    // this.submitColor.subscribe(() => {
    //   console.log('submit color emit called');
    // });

    this.submitColor.emit({
      color: {
        name: this.colorForm.value.colorNameInput,
        hexCode: this.colorForm.value.colorHexCodeInput,
      },
      cb: () => {}, // this.colorForm.reset(),
    });


  }

}
