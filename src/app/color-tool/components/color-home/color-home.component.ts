import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { DataTableConfig } from '../../../shared/shared.module';
import { Color, ColorEvent } from '../../models/color';

import { ColorsService } from '../../services/colors.service';

@Component({
  selector: 'color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  public headerText = 'Color Tool';
  public resetForm = new EventEmitter<void>();

  public colorTableConfig: DataTableConfig = {
    cols: [
      { header: 'Name', field: 'name' },
      { header: 'HexCode', field: 'hexCode' },
    ]
  };

  public colors: Color[] = [];


  constructor(
    private colorsSvc: ColorsService,
  ) { }

  public refreshColors() {
    return this.colorsSvc.all().then(colors => this.colors = colors);
  }

  public ngOnInit() {
    this.refreshColors();
  }

  public addColor(colorEvent: ColorEvent) {

    // this.colors = [ ...this.colors, {
    //   id: Math.max(...this.colors.map(c => c.id)) + 1,
    //   ...newColor,
    // }];

    this.colorsSvc.insert(colorEvent.color).then(() => {
      this.resetForm.emit();
      return this.refreshColors();
    }).then(() => console.log('all done'));


    // this.resetForm = Observable.create( (observer: Observer<void>) => {
    //   this.colorsSvc.insert(colorEvent.color).then(() => {
    //     observer.next(null);
    //     return this.refreshColors();
    //   }).then(() => console.log('all done'));
    // });

    // return this.colorsSvc
    //   .insert(colorEvent.color).then(() => Promise.all([
    //     // Promise.resolve(colorEvent.cb()),
    //     this.refreshColors(),
    //   ])).then(() => console.log('all done'))
    //   .catch(err => console.log('error: ', err));
  }

  public saveColor(editColor: Color) {

    const editIndex = this.colors.findIndex(c =>
      c.id === editColor.id);

    this.colors = [
      ...this.colors.slice(0, editIndex),
      editColor,
      ...this.colors.slice(editIndex + 1),
    ];
  }

  public deleteColor(colorId: number) {

    const editIndex = this.colors.findIndex(c =>
      c.id === colorId);

    this.colors = [
      ...this.colors.slice(0, editIndex),
      ...this.colors.slice(editIndex + 1),
    ];


  }

}
