import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semafor',
  templateUrl: './semafor.component.html',
  styleUrls: ['./semafor.component.scss']
})
export class SemaforComponent implements OnInit {
  cadenaClass:string;
  arrayClass:string[];
  colorSeleccionado:string;
  constructor() { 
    this.cadenaClass='semaforo azul';
    this.arrayClass=['semaforo','fw-bold','text-light']
    this.arrayClass.push('verde')
    this.colorSeleccionado='v';
  }

  ngOnInit(): void {
    setInterval(()=>{
      if(this.colorSeleccionado==='v'){
        this.colorSeleccionado='a';
      } else if(this.colorSeleccionado==='a'){
        this.colorSeleccionado='b';
      }else if(this.colorSeleccionado==='b'){
        this.colorSeleccionado='v';
      }
    },1000)
  }

}
