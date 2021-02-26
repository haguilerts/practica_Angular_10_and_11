import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/modelo/perfin.model';
import { ServicioGlobalService } from 'src/app/services/servicio-global.service';

@Component({
  selector: 'app-mostra-perfil',
  templateUrl: './mostra-perfil.component.html',
  styleUrls: ['./mostra-perfil.component.scss'],
})
export class MostraPerfilComponent implements OnInit {
  arryPersonas:Perfil[];
  sexo:string;
  constructor( private persServis:ServicioGlobalService) {
    persServis.sumaPersonas()    
    this.arryPersonas=[]
    this.sexo=''
   }

  ngOnInit(): void {
    console.log(this.persServis.getCantantes())
    //this.arryPersonas=this.persServis.getCantantes()
    //this.persServis.getFutbolistas().forEach(i=>  i.map(j=> this.personas.push(j)) )
    this.persServis.getPromiseCant()
    .then( cantantes=> {
      this.arryPersonas=cantantes
    });
    this.mostrarFut();

  }
  async mostrarFut(){
    (await this.persServis.getPromiseFutb()).map(i=> this.arryPersonas.push(i))
   
  }
  async onChange(e:any){
    console.log(`pulsado: ${e.target.value}`)
    console.log(this.persServis.getPersonasArray())
    console.log( await this.persServis.getByPais(e.target.value) );
    if(e.target.value==='todos'){
      this.arryPersonas=this.persServis.getPersonasArray()      
    }else{
      this.arryPersonas= await this.persServis.getByPais(e.target.value);       
    }
    
  }


}
