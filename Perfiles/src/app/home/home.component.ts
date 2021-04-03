import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imgs:any[]
  constructor() {
    this.imgs=[
      '../../assets/img/imgFondo.jpg',
      '../../assets/img/img.jpg',
      '../../assets/img/img1.jpg',
      '../../assets/img/img3.jpg'
    ]
   }

  ngOnInit(): void {
    
    const main=document.querySelector('.main')
    setInterval(()=>{
      
    },10000);
  }

}
