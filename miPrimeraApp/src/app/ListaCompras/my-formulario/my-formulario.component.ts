import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/models/productos.models';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-my-formulario',
  templateUrl: './my-formulario.component.html',
  styleUrls: ['./my-formulario.component.scss']
})
export class MyFormularioComponent implements OnInit {
  nuevoProducto:Producto
  @Output() producCreado:EventEmitter<Producto>
  constructor() {
    this.nuevoProducto=new Producto()
    this.nuevoProducto.cantidad=0;
    this.producCreado=new EventEmitter()
   }

  ngOnInit(): void {
  }
  onEnviar(){
    console.log(this.nuevoProducto)
    this.producCreado.emit(this.nuevoProducto)
    this.nuevoProducto=new Producto()
  }

}
