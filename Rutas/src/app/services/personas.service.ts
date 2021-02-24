import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonasService {
  persona:Persona[]
  constructor() {
    this.persona=[
      new Persona('mario','Rodrigues',32,true),
      new Persona('Rocio','Garcia',15,false),
      new Persona('Laura','Robles',28,true),
      new Persona('Lorenzo','Romero',65,false),
    ];
   }
   getAll(){
    return this.persona;
   }
   setAll(NuevaPers:Persona){
     this.persona.push(NuevaPers)

   }
}
