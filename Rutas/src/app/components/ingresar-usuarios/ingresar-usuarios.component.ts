import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/services/persona.model';
import { PersonasService } from 'src/app/services/personas.service';
//import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ingresar-usuarios',
  templateUrl: './ingresar-usuarios.component.html',
  styleUrls: ['./ingresar-usuarios.component.scss']
})
export class IngresarUsuariosComponent implements OnInit {
  arrPerosna:Persona[]
  nombre:string
  apellido:string;
  edad:number;
  activo:boolean;
  constructor(private perosnaService:PersonasService) { 
    this.arrPerosna=this.perosnaService.getAll()
    this.nombre=''
    this.apellido=''
    this.edad=0
    this.activo=false
  }

  ngOnInit(): void {
    
  }
  enviar(){
    this.perosnaService.setAll(new Persona(this.nombre,this.apellido,this.edad,this.activo))

  }
}
