import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productos.models';

@Component({
  selector: 'app-MyCompras-list',
  templateUrl: './compras-list.component.html',
  styleUrls: ['./compras-list.component.scss']
})
export class ComprasListComponent implements OnInit {
  PorductSelect:Producto[];
  constructor() { 
    this.PorductSelect=[];
  }

  ngOnInit(): void {
  }
  onProductocreado(e){
    console.log(e)
    this.PorductSelect.push(e);
  }

}
