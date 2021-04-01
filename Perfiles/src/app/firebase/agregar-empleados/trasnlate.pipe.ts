import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trasnlate'
})
export class TrasnlatePipe implements PipeTransform {
  constructor(){}
  transform(value: string):void {
   
  }

}
