import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
interface Persona{
  id:number;
  name:string;
  age:number;
  sexo:boolean; // true: masculino | false: femenino
}
@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss']
})
export class AlertaComponent implements OnInit {

  @Input() nombre:string;
  @Input('surname') apellido:string;
  @Input() edad:number;
  @Input('myPeli') pel:Persona[];
  
  @Output() alertaPulsada:EventEmitter<string>


  constructor() {
    this.nombre='Gio_Defecto';
    this.apellido='Agui_Defecto'
    this.edad=25
    this.alertaPulsada=new EventEmitter()

   }

  ngOnInit(): void {
    console.log(this.nombre)
  }
  onclick(){
    // console.log('mi alerta')
    let msn:string='-- msn Enviado por el @Output--';
    this.alertaPulsada.emit(msn)
  }
}
