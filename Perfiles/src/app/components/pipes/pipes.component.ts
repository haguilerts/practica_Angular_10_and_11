import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  //currencyPipe
  precio:number

  //DecimalPipe
  numero:number

  //DAtePipe
  fecha:Date;

  //PercentPipes
  numAleatorio:number;

  //jsonPipe
  studiante:any;

  //Lower, Upper , Tittle
  texto:string;

  //SlicePipe
  animales:string[]
  minimo:number

  //AsyncPipe
  prom:Promise<string>
  promPost:Promise<any[]>

  //localStorage
  //dato:Storage
  num:any[]=[5]
  constructor(private http:HttpClient,private posService:PostService) { 
    this.precio=999.4528
    this.numero=3.144432342342342
    this.fecha= new Date()
    this.numAleatorio=Math.random()
    this.studiante={
      id:1,
      name:'giovanny',
      surname:'Aguilar',
      edad:25,
      notas:[1,2,3,4,5,6,7,8,9],
      materia:['matematicas','Analisi','Algebra','quimica','fisica']
    }
    this.texto='hola bienvenido a Angular'
    this.animales=['perro', 'gato', 'pajaro','tortuga','rata', 'oso', 'leon', 'tigre', 'elefante', 'girafa']
    this.minimo=0
    this.prom=new Promise((resolve, reject) => {
      setTimeout( ()=> resolve('se resuleve la promesa pasando 4 seg'),4000)
    })
    this.promPost=posService.getAll()
    //this.dato=new Storage()
  }

  ngOnInit(): void {
    setInterval(()=>{
      this.fecha=new Date()
      this.numAleatorio=Math.random()      
    }, 1000)
    //localStorage.setItem('tutorial', 'Como utilizar el LocalStorage en Angular');
    //localStorage.getItem('tutorial');
  }

}
