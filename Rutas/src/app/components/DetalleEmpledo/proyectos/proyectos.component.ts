import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
interface Proyect{
  id:number;
  proyect:string;
}
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  proyecto:Proyect;
  constructor(private activatedRoute:  ActivatedRoute) { 
    this.proyecto=
      {
        id:-1,
        proyect:`proyecto 1`
      }
    
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      console.log(params.idEmpleado)
     
      this.proyecto.id=params.idEmpleado
  })
  }

}
