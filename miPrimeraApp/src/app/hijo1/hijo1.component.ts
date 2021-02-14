import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo2.component.css','./hijo1.component.scss','./hijo1.component.css']
})
export class Hijo1Component implements OnInit {
  mostrar:boolean;
  btn:string;
  arrayClass:string[];
  objFor:any[];
  opSwich:number;
  constructor() {
    this.arrayClass=['btn-primary']
    this.mostrar=true;
    this.btn='Ocultar'
    this.objFor=[
      {name:'gio',age:25},
      {name:'brandon',age:18},
      {name:'Rhonny',age:20},
      {name:'kevin',age:8},
      {name:'deo',age:46}
    ]
    this.opSwich=0
   }

  ngOnInit(): void {
    setInterval(()=>{
      if( this.opSwich<5){
        this.opSwich=this.opSwich+1
      }else{
        this.opSwich=0
      }
      
    },2000)
  }
  onClikMostrar(){
    this.mostrar=!this.mostrar;
    (this.mostrar)? this.btn='Ocultar':this.btn='Mostrar';
    (!this.mostrar)? this.arrayClass[1]='btn-success' :this.arrayClass[1]='btn-primary'
  }
  
}
