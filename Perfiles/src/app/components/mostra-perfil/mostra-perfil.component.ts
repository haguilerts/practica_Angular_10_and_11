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
  async onChangePais(e:any){
    console.log(`pulsado: ${e.target.value}`)
    console.log(this.persServis.getPersonasArray())
    console.log( await this.persServis.getByPais(e.target.value) );
    if(e.target.value==='todos'){
      this.arryPersonas=this.persServis.getPersonasArray()      
    }else{
      this.arryPersonas= await this.persServis.getByPais(e.target.value);       
    }
    
  }
  async onChangeEdad(e:any){
    let edad=document.querySelectorAll('.edad')
    edad.forEach(i=> i.classList.add('colorGreen'))   
  
    if(e.target.value==='MAY'){
      this.arryPersonas= await this.persServis.getByEdad(true);  
    }else  if(e.target.value==='MEN'){
      this.arryPersonas= await this.persServis.getByEdad(false); 
         
    }
    console.log(`ninguno`)
    //this.arryPersonas=this.persServis.getPersonasArray()  
    
  }
  async onChangeSexo(e:any){
    if(e.target.value==='MAX'){
      this.arryPersonas= await this.persServis.getBySexo(true);  
      console.log( await this.persServis.getBySexo(true))
    } else  if(e.target.value==='FEM'){
      this.arryPersonas= await this.persServis.getBySexo(false);  
    }
  }
  async onChangeProfecion(e:any){
    if(e.target.value==='CAN'){
      this.arryPersonas= await this.persServis.getCantantes();      
    } else  if(e.target.value==='FUT'){
      this.arryPersonas= await this.persServis.getFutbolistas();  
    } 
  }

}
