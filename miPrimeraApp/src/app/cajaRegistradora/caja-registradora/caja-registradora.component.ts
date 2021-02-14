import { Component, Input, OnInit } from '@angular/core';
import { Productos } from '../../objetosExport/productos';

@Component({
  selector: 'app-caja-registradora',
  templateUrl: './caja-registradora.component.html',
  styleUrls: ['./caja-registradora.component.scss']
})
export class CajaRegistradoraComponent implements OnInit {
  arrComida:Productos[];
  arrBebida:Productos[];
  prodSelec:Productos[];

  precioSelect:number[]
  saludar:string;
  constructor() {
    this.prodSelec=[]
    this.precioSelect=[null];
    console.log('precioSelect0: ',this.precioSelect )
    this.saludar='hola, como estas?? ...'
    this.arrComida=[
      new Productos('spiedo','../../../assets/productos/comida1.jpg',100,'comida de 10'),
      new Productos('Broaster','../../../assets/productos/comida2.jpg',160.0,'comida saludable'),
      new Productos('Pizza','../../../assets/productos/comida3.jpg',170.20,'comida Exelente'),
      new Productos('Sopa','../../../assets/productos/comida4.jpg',180.10,'comida amargo'),
    ];
    this.arrBebida=[
      new Productos('Bebida 1','../../../assets/productos/bebida1.jpg',50.75,'bebida de 10'),
      new Productos('Bebida 2','../../../assets/productos/bebida2.jpg',60.50,'bebida Refrescante'),
      new Productos('Bebida 3','../../../assets/productos/bebida3.jpg',70.25,'bebida Frio'),
      new Productos('Bebida 4','../../../assets/productos/bebida4.jpg',80.0,'bebida congelado'),
    ]
   }

  ngOnInit(): void {
    console.log('precioSelect1: ',this.precioSelect )
  }
  recibir(e:Productos){
    console.log('recibi :',e.precio)
    // this.prodSelec.push(e)
    console.log(`prodSelec: ${this.prodSelec} `)
    const producEncontrado=this.prodSelec.find(prod => prod.nombre===e.nombre);
    (producEncontrado) ? producEncontrado.cantidad++ : this.prodSelec.push(e);
  }
  funcion(e:string){
    console.log(`funcion recibida: ${e}`)
  }
  
}
