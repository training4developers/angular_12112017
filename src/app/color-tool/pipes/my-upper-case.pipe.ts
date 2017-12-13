import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUpperCase', pure: true,
})
export class MyUpperCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('myuppercase executed');
    return String(value).toUpperCase();
  }

}
