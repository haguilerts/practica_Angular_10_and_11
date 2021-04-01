import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoFirebaseService {

  constructor(private firebase:AngularFirestore) { }

  addEmpleado(empleado:any):Promise<any>{
    return this.firebase.collection('empleado').add(empleado)
  }
  getEmpleados():Observable<any>{
    console.log(this.firebase.collection('empleado').snapshotChanges())
    return this.firebase.collection('empleado',ref=> ref.orderBy('fechaCreacion','asc')).snapshotChanges();
  }
  deleteEmpleado(id:string):Promise<any>{
    return this.firebase.collection('empleado').doc(id).delete();
  }
  editEmpleado(id:string):Observable<any>{
    return  this.firebase.collection('empleado').doc(id).snapshotChanges()
  }
  updateEmpleado(id:string,data:string):Promise<any>{
    return this.firebase.collection('empleado').doc(id).update(data);
  }
}
