import { Component, OnInit } from '@angular/core';
import { Carrucel } from './carrucel';

@Component({
  selector: 'app-hogar',
  templateUrl: './hogar.component.html',
  styleUrls: ['./hogar.component.scss']
})
export class HogarComponent implements OnInit {
  idCarrucel:string
  //carrucel:Carrucel;
  constructor() { 
    this.idCarrucel='idCarrucel'
    //this.carrucel=new Carrucel(this.idCarrucel)
  }

  ngOnInit(): void {
  }
  irAtras(){
    //this.carrucel.cambiarAtras()
  }
  irAdelante(){ 
    //this.carrucel.cambiarAdelante()
  }
}
