import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Productos } from 'src/app/objetosExport/productos';
// import { Item } from '../../../../../miApp/src/app/Obj/item';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
 @Input() titulo:string;
 @Input() productos:Productos[];
 
 @Output() agregar: EventEmitter<Productos>;  
 @Output() cambiarHijo=new EventEmitter<string>()
   constructor() { 
    this.titulo='hola mundo'
    this.agregar=new EventEmitter()
   }

  ngOnInit(): void {
  }
  enviar(i,item:Productos){
    console.log(item,i)
    // alert('elemnto agregado')
    this.agregar.emit(item);
    this.cambiarHijo.emit(this.titulo)
  }
}
