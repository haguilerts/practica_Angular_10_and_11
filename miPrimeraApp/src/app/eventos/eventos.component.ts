import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
    nombre:string;
  evento:string="";
  constructor() { 
    this.nombre=""
  }

  ngOnInit(): void {
  var cuadrado=   document.querySelector('.cuadrado');

  }
  onclick():void{
    alert("se hiso el clip");
  }
  clickEvent(e){
    console.log(e)
    // alert(e)
  }
  onchange(e){
    console.log(e.target)
  }
  onMauseEnter() {
    this.evento="mouseenter"
    // console.log("ingreso");
    var cuadrado=document.querySelector('.cuadrado')
    
    if(cuadrado.classList[0]=='verde'){
      // console.log('----color verde')
      cuadrado.classList.replace('verde','amarillo')
    }else{
      cuadrado.classList.replace('color','amarillo')
      // console.log('----color blanco')
    }
  }
  onMauseOut(){
    this.evento="mouseout"
    // console.log("salgo");
    var cuadrado=document.querySelector('.cuadrado')
    cuadrado.classList.replace('amarillo','verde')
  }
  onChangeImput(e){
    this.nombre=e.target.value
    console.log("change: "+e.target.value)

    let resultado= document.querySelector('.res')    
    if(e.target.value===""){
      resultado.classList.remove('amarillo')
    }else{
      resultado.classList.add('amarillo')
    }
  }
  onImput(e){
    this.nombre=e.target.value
    console.log("input: "+e.target.value)
    let resultado= document.querySelector('.res')    
    if(e.target.value===""){
      resultado.classList.remove('verde')
    }else{
      resultado.classList.add('verde')
    }
  }
  onFocus(e){
    // console.log('focus')
    let input=document.querySelector('#name')
    // console.log(e.target)
    if(input.classList[2]=='blur'){
      input.classList.replace('blur','foco')
    }else{
      input.classList.add('foco')
    }
   
  }
  onBlur(e){
    // console.log('blur')
    let input=document.querySelector('#name')
    if(input.classList[2]=='foco'){
      input.classList.replace('foco','blur')
      console.log('ok')
    }else{
      input.classList.add('foco')
      console.log('noo ok')

    }
  }
}
