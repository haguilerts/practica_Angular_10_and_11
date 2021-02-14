import { Component, Input, OnInit,SimpleChange } from '@angular/core';
import { Productos } from '../../objetosExport/productos';

@Component({
  selector: 'app-registro-produc',
  templateUrl: './registro-produc.component.html',
  styleUrls: ['./registro-produc.component.scss']
})
export class RegistroProducComponent implements OnInit {
  @Input('recibiendoProducto') arryProd:Productos[];
  precioTotal:number;
  constructor() { 
    this.precioTotal=0;
  }


  ngOnInit(): void {
  }
  ngOnChanges(changes:SimpleChange){
   
  }
  total(){
    let pTotal=0
    for (const item of this.arryProd) {
      pTotal+=(item.precio * (item.cantidad+1))
    }
    console.log(`pTotal: ${pTotal}`)
    return pTotal;
  }
  onDelite(id){
    if(this.arryProd[id].cantidad===0){
      this.arryProd.splice(id,1);
    }else{
      this.arryProd[id].cantidad--;
    }
  }
  
}
