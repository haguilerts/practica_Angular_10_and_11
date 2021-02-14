import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.scss']
})
export class CronometroComponent implements OnInit {
  contador:number;
  constructor() { 
    this.contador=12;
  }

  ngOnInit(): void {
    
  }
  iniciarCronometro(){
    let interval= setInterval(()=>{
      this.contador--;
      if(this.contador===0){
        clearInterval(interval)
      }
    },500)
  }
}
