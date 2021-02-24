import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RamdomGuard implements CanActivate {
   /*
    canActiate:       mira si el usuario puede accedera una PAG determinada
    canActiateChild:  mira si el usuario puede acceder a una pag HIJA de una determinada ruta
    canDesactivate:   mira si el usuario puede salir de una pag. es decir por Ej: una alerta de msn para salir de la pag con los cambios guardados
    Canload:          sirve para para evitar que la aplicacion cargue los modulos peresosamente si el usuario no esta autorisado hacerlo.

    */
   // lo llamo desde la ruta: app-routing.module
  canActivate(
    route: ActivatedRouteSnapshot,// se recibe la sig ruta Activa
    state: RouterStateSnapshot// estado de la ruta actual
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true; // pasa o no a la siguiente ruta:Boolean- true | false
    const numAleatorio=Math.random();
    console.log(numAleatorio)
    if(numAleatorio>0.4){
      console.log('siii ingresado')
      return true;
    }else{
      console.log('Nooo ingresado por RamdomGuard.canActivate')
      return false;
    } 
  }
 
}
/**
 *  const id=Math.random();
      console.log(id)
      if(id>0.2 && id<0.6){
        console.log('ingresando..: '+id)
        return true
      }else{
        console.log('no ingresooo: '+id)
        return false
      }
 */