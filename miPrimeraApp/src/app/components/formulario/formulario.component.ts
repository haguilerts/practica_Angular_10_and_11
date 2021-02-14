import { Component, OnInit } from '@angular/core';
interface Humano{
  id:string,
  name:string
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
//  pers:Humano={
//    id:'',
//    name:''
//  }
pers:any={
  name:'',
  surname:'',
  age:0,
}
 texto:string=`hola me llamo ${this.pers.name} ${this.pers.surname} y tengo ${this.pers.age}`;

  constructor() {}
   ngOnInit(): void {
   }​​​​​​​
  cambiar(e){
    console.log('');
    // this.pers.name='kevin';
    // this.pers.surname='aguilar';
    // this.pers.age=123;
  }

}
