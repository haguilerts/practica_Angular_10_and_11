import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToArr'
})
export class NumToArrPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(typeof value==='number'){
      console.log([...Array(value).keys()])
      return [...Array(value).keys()]
    }
    return value;

  }

}
