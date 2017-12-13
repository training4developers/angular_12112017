import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Color } from '../models/color';

@Injectable()
export class ColorsService {

  constructor(private httpClient: HttpClient) { }

  public all() {
    return this.httpClient.get<Color[]>('http://localhost:3050/colors').toPromise();
  }

}
