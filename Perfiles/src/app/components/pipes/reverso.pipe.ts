import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverso'
})
export class ReversoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    //return null; // resmplaz el texto por nulo
    //return 'Holaaaa' // remplaza el texto por 'holaaaaa'
    //return value  // visualiza el texto original
    console.log('valorrr: ',value)  
    return value.split('').reverse().join('') 

  }

}
