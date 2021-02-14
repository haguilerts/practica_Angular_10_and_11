import { Component, Input, OnInit,SimpleChange } from '@angular/core';
import { Tarea } from '../../models/tarea.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  @Input('arrayProd_Hijo') producto:Tarea[];
  total:number;
  constructor() {
    console.log('-- 2) lista es constructor() hijo --- ')
    this.total=0;
    
  }
  public calcularTotal(){
    console.log('calcular')
    this.producto.forEach( (i)=>{
      this.total=this.total+i.precio;
    })
  }
  ngOnChanges(changes:SimpleChange){
    console.log('--------------- star ------------')
    console.log(`# LIstaaa : ${changes.currentValue}/, : ${changes.previousValue}`)
    
    console.log('--------------- end ------------')
    // se ejecuta cada ves q la variable va cambiando su valor 
  }
  ngOnInit(): void {
    console.log('-- 2) este es ngAfterViewInit() hijo --- ')
    // this.calcularTotal();
  }
  ngAfterViewInit(){
    console.log(`ultimo: ${this.producto[0]}`)

    // es el ultimo q se ejecuta para verificar q termino de cargar la pagina
  }

}
