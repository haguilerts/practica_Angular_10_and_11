import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Detalles_sub_perfil } from 'src/app/modelo/perfin.model';
import { ServicioSubDetallService } from 'src/app/services/servicio-sub-detall.service';

@Component({
  selector: 'app-sub-detal-perfil',
  templateUrl: './sub-detal-perfil.component.html',
  styleUrls: ['./sub-detal-perfil.component.scss']
})
export class SubDetalPerfilComponent implements OnInit {
  private tiempo= new Date()
  fecha=`${this.tiempo.getFullYear()}/${this.tiempo.getMonth()} - ${this.tiempo.getUTCHours()}:${this.tiempo.getMinutes()}`
  arryMusicas:Detalles_sub_perfil[]
  constructor( private musicaService:ServicioSubDetallService, private activateRouter:ActivatedRoute) { 
    this.arryMusicas=[]
  }

  ngOnInit(): void {
    this.activateRouter.parent?.params.subscribe(async param=>{
      console.log(param)
      this.arryMusicas= await this.musicaService.getCantante(parseInt(param.id) )
      console.log(this.arryMusicas)
    })
    
   
    console.log(new Date().getFullYear())
  }

}
