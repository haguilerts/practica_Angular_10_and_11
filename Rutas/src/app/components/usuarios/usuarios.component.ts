import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/services/persona.model';
import { PersonasService } from 'src/app/services/personas.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  person:Persona[]
  constructor( private pers:PersonasService) { 
    this.person=[]
  }

  ngOnInit(): void {
    this.person=this.pers.persona
  }

}
