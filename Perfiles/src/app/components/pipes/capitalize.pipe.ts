import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
   /*  if(typeof value ==='string'){
      let palabras=value.split(' ')
      let arrTemporal=[]
      for (const letras of palabras) {
        arrTemporal.push(letras[0].toUpperCase() + letras.slice(1).toLowerCase() )
      }
      return arrTemporal.join(' ')
    } */
    if(typeof value ==='string'){
      return value.split(' ')
             .map(letras => letras[0].toUpperCase() + letras.slice(1).toLowerCase() )
             .join(' ')
    }

    return null;
  }

}
