import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.scss']
})
export class SumaComponent implements OnInit {
  num1:number;
  num2:number;
  resultado:number=0;
  constructor() {
    this.num1=2;
    this.num2=3;
   }

  ngOnInit(): void {
  }
  sumar():void{
    // this.num1=n1
    // this.num2=n2
    this.resultado=this.num1 + this.num2
    alert(`${this.num1} + ${this.num2} = ${this.resultado}`)
  }
  resta():void{
    // this.num1=n1
    // this.num2=n2
    this.resultado=this.num1 - this.num2
    alert(`${this.num1} - ${this.num2} = ${this.resultado}`)
  }
  multiplicacion():void{
    // this.num1=n1
    // this.num2=n2
    this.resultado=this.num1 * this.num2
    alert(`${this.num1} x ${this.num2} = ${this.resultado}`)
  }
  divicion():void{
    // this.num1=n1
    // this.num2=n2
    if(this.num2==0){
       this.resultado=this.num1 / this.num2
      alert(`${this.num1} % ${this.num2} = ${this.resultado}`)
    }else{
      alert("vuleva a inglesar. no exite divisor por 'cero'")
    }
   
  }
}
