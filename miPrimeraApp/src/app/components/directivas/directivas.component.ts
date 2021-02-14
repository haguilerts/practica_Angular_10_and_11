import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.scss']
})
export class DirectivasComponent implements OnInit {
style1:any;
  constructor() {
    this.style1={color:'white',fontSize:'15px',fontWeight:'15px'}
   }

  ngOnInit(): void {
  }
  cambiarColor(c:string){
    switch(c){
      case 'a':
        this.style1.color='blue';
        break;
      case 'v':
        this.style1.color='green';
        break;
      case 'c':
        this.style1.color='cyan';
        break;
    }
  }
  onInput(e){
    this.style1.fontSize=`${e.target.value}px`
    console.log(e.target.value)
  }
}
