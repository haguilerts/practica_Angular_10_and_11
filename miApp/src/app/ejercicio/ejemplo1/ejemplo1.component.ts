import { Component, OnInit } from '@angular/core';
import {Persona} from '../../Obj/Persona';
@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.less']
})
export class Ejemplo1Component implements OnInit {
  objeto:Persona={
    id:1,
    name:'Giovanny',
    age:18,
    sexo:true
  }
  nombres:Array<string>;
  edades:Array<number>;
  fecha:Date;  

  constructor() { 
    this.fecha= new Date();
    this.nombres=["Gio","Rhonny","Brandon","kevin","Deo","prima"];
    this.edades=[22,20,18,5,45,44];

  }

  ngOnInit(): void {
    console.log("mi nombre es: "+this.objeto.name)
  }
  aumentarAge(){
    this.objeto.age+=1
  }
  disminuirAge(){
    this.objeto.age-=1
  }
}
