import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Color } from '../models/color';

@Injectable()
export class ColorsService {

  private baseUrl = 'http://localhost:3050/colors';

  constructor(private httpClient: HttpClient) { }

  private getCollectionURL() {
    return this.baseUrl;
  }

  private getElementURL(id: number) {
    return this.baseUrl + '/' + encodeURIComponent(id.toString());
  }

  public all() {
    return this.httpClient.get<Color[]>(this.getCollectionURL()).toPromise();
  }

  public one(id: number) {
    return this.httpClient.get<Color>(this.getElementURL(id)).toPromise();
  }

  public delete(colorId: number) {
    return this.httpClient
      .delete<void>(this.getElementURL(colorId)).toPromise();
  }

  public insert(color: Color) {
    return this.httpClient.post<Color>(this.getCollectionURL(), color).toPromise().catch(err => {
      // write some logging code...
      return Promise.reject(err);
    });
  }

  public replace(color: Color) {
    return this.httpClient.put<Color>(this.getElementURL(color.id), color).toPromise();
  }

}
