import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/services/persona.model';
import { PersonasService } from 'src/app/services/personas.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  mostrarBtn:boolean
  ArryPerson:Persona[]

  constructor( private pers:PersonasService) { 
    this.ArryPerson=[]
    this.mostrarBtn=false;
  }

  ngOnInit(): void {
    this.ArryPerson=this.pers.persona

  }
  onclickActivos(){
    //this.router.navigate([pRuta]); // envia la raruta para acceder 
    this.pers.activos() // verifico quienes estan activos 
    .then(arrTemPers => console.log(arrTemPers))
    .catch(error=>console.log(error))    
  }
  async onclickActivosAwait(){
    /* this.router.navigate([pRuta]); */ // envia la raruta para acceder 
    try {
      this.ArryPerson= await this.pers.ActivosFilter() // verifico quienes estan activos 
      console.log(`mi obj: ${this.ArryPerson}`)
      this.mostrarBtn=! this.mostrarBtn
    } catch (error) {
      console.log(error)
    }
      
  }
 
  onclickTodo(){
    this.ArryPerson=this.pers.getAll();
    this.mostrarBtn=! this.mostrarBtn
  }
}
