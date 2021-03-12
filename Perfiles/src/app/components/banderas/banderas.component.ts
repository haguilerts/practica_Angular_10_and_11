import { Component, OnInit } from '@angular/core';
import { BanderasService } from 'src/app/services/banderas.service';

@Component({
  selector: 'app-banderas',
  templateUrl: './banderas.component.html',
  styleUrls: ['./banderas.component.scss']
})
export class BanderasComponent implements OnInit {
 
  arrayPaises:any[]
  constructor(private paisServis:BanderasService) {
    this.arrayPaises=[]
   
   }

  async ngOnInit(){
    this.arrayPaises= await this.paisServis.getPaises();
    console.log(this.arrayPaises)
  }

}
