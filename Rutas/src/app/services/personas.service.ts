import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonasService {
  persona:Persona[]
  constructor() {
    this.persona=[
      new Persona('Giovanny','Aguilar',32,true),
      new Persona('Rhonny','Rojas',15,false),
      new Persona('Kevin','Perez',28,true),
      new Persona('Brandon','Ayna',65,false),
    ];
   }
   getAll(){
    return this.persona;
   }
   setAll(NuevaPers:Persona){
     this.persona.push(NuevaPers)
   }
   activos():Promise<Persona[]>{
    const prom=new Promise<Persona[]>((resolve,rejects)=>{
    const arrTemp:Persona[]=[]
      for (const pers of this.persona) {
        if(pers.activo){
          arrTemp.push(pers)
        }
      }
      resolve(arrTemp)
    })
    return prom
   }
   ActivosFilter():Promise<Persona[]>{
    return new Promise((resolve,rejects)=>{
      const arrTemp= this.persona.filter(p=>{
        return p.activo
      })
      resolve(arrTemp)
      //resolve(this.persona.filter(p=> p.activo))
    })
  }

}
