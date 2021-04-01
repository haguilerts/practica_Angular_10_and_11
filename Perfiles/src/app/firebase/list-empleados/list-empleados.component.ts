
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { EmpleadoFirebaseService } from 'src/app/services/empleado-firebase.service';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.scss']
})
export class ListEmpleadosComponent implements OnInit {
  items: Observable<any[]>;
  elEmpleado:any[]
  constructor(private toastr: ToastrService,private empleadoServi:EmpleadoFirebaseService,firestore: AngularFirestore) {
    //this.items = firestore.collection('items').valueChanges();
    this.items = firestore.collection('empleado').valueChanges();
    this.elEmpleado=[]
   
   }
  ngOnInit(): void {
    this.getMisEmpleado()
  }
  getMisEmpleado(){
    console.log('estas en mis empleados')
    this.empleadoServi.getEmpleados().subscribe(data=>{
      //console.log(data)
      this.elEmpleado=[]
      data.forEach((i:any) => {
        //console.log(i.payload.doc.id,i.payload.doc.data())
        this.elEmpleado.push({
          id:i.payload.doc.id,
          ...i.payload.doc.data()
        });
      });
      console.log( this.elEmpleado)
    });    
  }
  async delEmpleado(id:string){
    try {
        const borrar=await this.empleadoServi.deleteEmpleado(id)
        console.log('empleado aliminado: ',borrar)
        this.toastr.success('El empleado Elimino con Exito','Empleado Eliminado!',{
          positionClass:'toast-center-center',
          timeOut:5000,
          progressBar:true,
          progressAnimation:'increasing',
          enableHtml:true,
          messageClass:'color:blue;'
          
        })
    } catch (error) {
      console.log(error)
    }
  }
}
