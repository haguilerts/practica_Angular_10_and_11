import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productos.models';

@Component({
  selector: 'app-list-produc',
  templateUrl: './list-produc.component.html',
  styleUrls: ['./list-produc.component.scss']
})
export class ListProducComponent implements OnInit {
  @Input() ProdArry:Producto;
  constructor() { }

  ngOnInit(): void {
  }

}
