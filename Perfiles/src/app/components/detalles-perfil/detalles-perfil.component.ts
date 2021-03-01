import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from 'src/app/modelo/perfin.model';
import { ServicioGlobalService } from 'src/app/services/servicio-global.service';

@Component({
  selector: 'app-detalles-perfil',
  templateUrl: './detalles-perfil.component.html',
  styleUrls: ['./detalles-perfil.component.scss']
})
export class DetallesPerfilComponent implements OnInit {
    detallesPerfil:Perfil;
  constructor(private ActRouter: ActivatedRoute,private perServis:ServicioGlobalService,private router:Router ) { 
    this.detallesPerfil=new Perfil(1,'','','',0,false,'','')
    this.ActRouter.params.subscribe( async param=>{
      console.log(param)
      this.detallesPerfil=(await this.perServis.getByID(param.profecion,parseInt(param.id))) 
    })
  }

  ngOnInit() {
    this.ActRouter.params.subscribe( async param=>{
      console.log(param)
      this.detallesPerfil=(await this.perServis.getByID(param.profecion,parseInt(param.id))) 
    })

  }
  volverInicio(){
    this.router.navigate([`home`]);
    console 
    console.log(this.router.navigate([`perfil`]))
  }

}
