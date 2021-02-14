import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
  res:string;
  calFinalizado:boolean;
  constructor() { 
    this.res='';
    this.calFinalizado=false;
  }

  ngOnInit(): void {
  }
  onclick(e,n?:number){
    console.log(e.target.innerText)
    
    let myRes=document.querySelector('.ressultado');
    if(myRes.classList[8]==='text-primary'){
      myRes.classList.replace('text-primary','text-break');
      console.log("cambio: "+e.target.innerText)
      if (e.target.innerText!=='+') {
        console.log('distinto de +')
        this.res=e.target.innerText 
      }
    }else{
      this.res=this.res + e.target.innerText
    }
    
  }
  clear(){
    this.res=''
  }
  resultado(e){
    this.res=eval(this.res)
    let myRes=document.querySelector('.ressultado');
    myRes.classList.add('text-primary');
  }
}
