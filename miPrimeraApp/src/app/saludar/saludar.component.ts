
import { Component, OnInit } from '@angular/core';
import { Tarea } from '../models/tarea.model';
interface Persona{
  id:number;
  name:string;
  age:number;
  sexo:boolean; // true: masculino | false: femenino
}
@Component({
  selector: 'app-saludar',
  // template:` 
  //   <h1> hola Saludo</h1> 
  //   <h3> subtitulo</h3>`,
  templateUrl: './saludar.component.html',
  // styles: ['h1{color:red;}'],
  styleUrls: ['./saludar.component.scss']
})

export class SaludarComponent implements OnInit {
  mensaje:string;
  contenido:string;
  nombre:string;
  idParrafo:string='blue';
  idInput:string;
  pelicula:string[];
  obj:Persona[];
  output:string;
  ArrayProd_Padre:Tarea[];
  siclo_vida:string='1-saludar'
 
  // objeto:Persona
  // cosntruc: solo sirve para inicializar las variables
  constructor() { 
    console.log('___ 1) este es constructor() saludar ___')
    this.nombre="giovanny";
    this.mensaje='salodos a todos';
    this.contenido='¿Como estan?'
    this.idInput='text'
    this.pelicula=['peli 1','peli 2', 'peli 3','peli 4']
    this.obj=[
      { id:1,
        name:'Giovanny',
        age:25,
        sexo:true,
      },
      { id:2,
        name:'Rhonny',
        age:20,
        sexo:true,
      },
      { id:1,
        name:'maria',
        age:10,
        sexo:false,
      }
    ]
    this.ArrayProd_Padre=[];
    setTimeout(()=>{
      this.mensaje='un gusto saludarlos!!!'
      this.contenido='Me da gusto q esten bien!!'
      this.idParrafo='green'
      this.idInput='checkbox'
    }, 5000)
    setTimeout(()=>{
      this.idInput='number'
    }, 10000)
  }

  ngOnInit(): void {
    console.log('___ 2) este es ngOnInit() saludar ___')
   
      setInterval(()=>{
          this.siclo_vida=`2 -- SALUDANDO`
      },2000) 
  }
  mostrarSaludo():string{
    return "saludo desde el metodo, me llamo "+this.nombre;
  }
  onAlertaRecibido(e){
    console.log('mi msn Recibido=> '+e)
    this.output=e;
  }
  onProdCreada(e){
    console.log(e)
    this.ArrayProd_Padre.push(e);
    console.log(this.ArrayProd_Padre)
  }
}
