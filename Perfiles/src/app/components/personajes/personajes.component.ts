import { Component, OnInit } from '@angular/core';
import {PersonajesService} from '../../services/personajes.service'
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {
  arrayPers:any[];
  curentPage:number;
  numPagina:number;
  constructor(private perServis:PersonajesService) {
    this.arrayPers=[]
    this.curentPage=1
    this.numPagina=1;
   }

  ngOnInit() {
    this.perServis.getAll(this.numPagina)
      .then(res=>{
        console.log(res['results'])
        this.arrayPers=res['results']
        this.numPagina=res['info']['pages']
      })
  }
 
  async cambioPagina(sigueinte:boolean){
    if(sigueinte){
      this.curentPage++;
    }else{
      this.curentPage--;
    }
    const rs= await this.perServis.getAll(this.curentPage);
    this.arrayPers=rs['results']
  }

}
