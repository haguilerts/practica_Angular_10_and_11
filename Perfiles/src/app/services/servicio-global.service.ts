import { Injectable } from '@angular/core';
import {Cantantes, Futbolistas} from '../BBDD/Perfil.BD'
import { Perfil } from '../modelo/perfin.model';


@Injectable({
  providedIn: 'root'
})
export class ServicioGlobalService {
  humano:Perfil[]=[];
  constructor() { }
  private sumarPerfil(c:Perfil[]){
    for (const p of c) {
      this.humano.push(p)
    }
  }
  sumaPersonas(){
    this.sumarPerfil(Cantantes)
    this.sumarPerfil(Futbolistas)
    //console.log(`humanoServis: ${this.humano}`)
  }
  getPersonasArray():Perfil[]{
    //this.sumaPersonas()
   // console.log(`Todos: ${this.humano}`)
    return this.humano
  }
  // -----------------------------------------------------

  getCantantes():Perfil[]{
    return Cantantes 
  }
  getFutbolistas():Perfil[]{
    return Futbolistas
  }
  // -----------------------------------------------------

  getPromiseCant():Promise<Perfil[]>{
    return new Promise((resolve,rejects)=>{
      resolve(Cantantes)
    })
  }
  
  getPromiseFutb():Promise<Perfil[]>{
    return new Promise((resolve,rejects)=>{
      resolve(Futbolistas)
    })
  }
  // -------------------------------------------------------

  getByPais(pPais:string):Promise<Perfil[]>{
    return new Promise((resolve,rejects)=>{
     
      const arryFitro:Perfil[]=[]
      for (const i of this.humano) {
        if(i.pais===pPais){
          arryFitro.push(i)
        }
      }
      //console.log(`arrayFiltro: ${arryFitro}`)
      resolve(arryFitro)
     
    })
  }
  getByEdad(pEdad:boolean):Promise<Perfil[]>{
    return new Promise((resolve,rejects)=>{
     
      const arryFitro:Perfil[]=[]
      for (const i of this.humano) {
        if(i.edad>18 && pEdad===true){
          arryFitro.push(i)
          console.log(`mayor`)
        }else if(i.edad<18 && pEdad===false){
          arryFitro.push(i)
          console.log(`menor`)
        }
      }
      //console.log(`arrayFiltro: ${arryFitro}`)
      resolve(arryFitro)
     
    })
  }
  getBySexo(pSexo:boolean):Promise<Perfil[]>{
    return new Promise((resolve,rejects)=>{
     
      const arryFitro:Perfil[]=[]
      for (const i of this.humano) {
        if(i.sexo===pSexo){
          arryFitro.push(i)
        }
      }
      //console.log(`arrayFiltro: ${arryFitro}`)
      resolve(arryFitro)
     
    })
  }
  getByProfecion(pProfecion:string):Promise<Perfil[]>{
    return new Promise((resolve,rejects)=>{
     
      const arryFitro:Perfil[]=[]
      for (const i of this.humano) {
        if(i.profecion===pProfecion){
          arryFitro.push(i)
        }
      }
      //console.log(`arrayFiltro: ${arryFitro}`)
      resolve(arryFitro)
     
    })
  }
  //------------------------------------------------------------

  getByID(Prof:string,id:number):Promise<Perfil>{
    return new Promise((resolve,rejects)=>{
      let arryFitro:Perfil= new Perfil(0,'','','',0,false,'','')
      for (const i of this.humano) {
        if(i.id===id && i.profecion==Prof){
          arryFitro=i
          //console.log(i)          
        }
      }
      console.log(`arrayFiltro: ${arryFitro}`)
      resolve(arryFitro)
    })
  }
}
