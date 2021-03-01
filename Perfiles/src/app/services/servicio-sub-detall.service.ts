import { Injectable } from '@angular/core';
import {Detalles_Cantantes,Detalles_Futbool} from '../BBDD/Perfil.BD';
import { Detalles_sub_perfil } from '../modelo/perfin.model';
@Injectable({
  providedIn: 'root'
})
export class ServicioSubDetallService {

  constructor() { }

  getCantante(id:number):Promise<Detalles_sub_perfil[]>{
    return new Promise( (resolve,reject)=>{
      const arryFiltro=Detalles_Cantantes.filter(cantante=> {
        return cantante.perfonaje===id
      })
      resolve(arryFiltro);
    })
  }
  getfutbolista(id:number):Promise<Detalles_sub_perfil[]>{
    return new Promise( (resolve,reject)=>{
      const arryFiltro=Detalles_Futbool.filter(fut=> {
        return fut.perfonaje===id
      })
      resolve(arryFiltro);
    })
  }
}
