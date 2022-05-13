
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { EmpleadoFirebaseService } from 'src/app/services/empleado-firebase.service';

@Component({
  selector: 'app-agregar-empleados',
  templateUrl: './agregar-empleados.component.html',
  styleUrls: ['./agregar-empleados.component.scss']
})
export class AgregarEmpleadosComponent implements OnInit {
  login:boolean
  form: FormGroup;
  id:string | null;
  title:string
  enviar:string

  archivo:any[]
  urlImg:string;
  loading:boolean;
  constructor( private sanitizer: DomSanitizer,private url:ActivatedRoute,
    private ruter:Router, private fb:FormBuilder,
    private empleado:EmpleadoFirebaseService,private toastr: ToastrService ) {
      this.form=this.fb.group({
        name:['',Validators.required],
        surname:['',Validators.required],
        age:['',Validators.required]
      })
    this.loading=false
    this.login=false
    this.enviar=''
    this.title='Agregar Empleados'
    this.id=url.snapshot.paramMap.get('idPerson')
    console.log(this.id)
   }
  ngOnInit(): void {
    this.estoyEnEmpleados()
  }
  // verifico si estoy en editar o agregar empleado
  estoyEnEmpleados(){  
    if(this.id!==null){
      this.title='Editar Empleados'
      this.login=true
      this.enviar='Guardar'
      this.empleado.editEmpleado(this.id)
      .subscribe(data=>{
        //console.log(data.payload.data()['nombre'])
        this.login=false
        this.form.setValue({
          name: data.payload.data()['nombre'],
          surname: data.payload.data()['apellido'],
          age: data.payload.data()['edad'],
        })
      })
    }else{
      this.enviar="Enviar"
      this.title='Agregar Empleados';
    }
    
  }
  // guardo o actualizo los datos
  onclickEmpleado(){
    if(this.form.invalid){
      console.log('-- formulario no valido...')
      this.toastr.info('formulario no valido','Vuelve a intentar',{
      positionClass:'toast-center-center',
      timeOut:5000,
      progressBar:true,
      progressAnimation:'increasing'
      })
      return;
    }
    if(this.id==null){
      this.agregarEmpleado();
    }else{
      this.editEmpleado(this.id)
    }
  }

  editEmpleado(id:string){
   
    const myEmpleado:any={
      nombre: this.form.value.name,
      apellido: this.form.value.surname,
      edad: this.form.value.age,
      fechaActualizacion:new Date()
    }
    this.login=true
    this.empleado.updateEmpleado(id,myEmpleado)
    .then(()=>{
      this.login=false
      this.toastr.info('El empleado fue modificado con Exito','Empleado Modificado',{
        positionClass:'toast-center-center',
        timeOut:5000,
        progressBar:true,
        progressAnimation:'increasing'
      })
      this.ruter.navigate(['/listFirebase'])
    })
    
  }
  
  agregarEmpleado(){
    console.log('estas en enviar...')
    
    const myEmpleado={
      nombre: this.form.value.name,
      apellido: this.form.value.surname,
      edad: this.form.value.age,
      fechaCreacion:new Date(),
      fechaActualizacion:new Date()
    }
    console.log(myEmpleado)
   
    this.empleado.addEmpleado(myEmpleado)    
    .then(()=>{
      console.log('empleado mostrado con exito')
      this.toastr.success('El empleado registrado con exito','Empleado Registrado',{
        positionClass:'toast-center-center',
        timeOut:10000,
        progressBar:true,
        progressAnimation:'increasing'        
      })
      this.login=true;
      setTimeout(()=>{
        this.login=false;
       this.ruter.navigate(['/listFirebase'])
      },10000)
      
    })    
    .catch(error=>{
      console.log(error)
      this.login=false;

    })

  }
  capturarFile(event){
    const imagen = event.target.files[0];
    console.log(imagen);
    this.blobFile(imagen)
    .then((img:any)=>{
     /*  console.log(img) */
      this.urlImg=img.base
    })
    /* if (['image'].includes(imagen.type)) {
      console.log('Si es una imagen');
      this.archivo.push(imagen)
      this.blobFile(imagen).then((res: any) => {
        this.urlImg = res.base;

      })
    } else {
      console.log('No es imagen');

    } */

  }
  loadImages = () => {
    try {
      const formData = new FormData();
      this.archivo.forEach((item) => {
        formData.append('files', item)
      });
      this.loading = true;
     /*  this.rest.post(`http://localhost:3001/upload`, formData)
        .subscribe(res => {
          this.loading = false;
          console.log('Carga exitosa');


        }); */
    } catch (e) {
      console.log('ERROR', e);

    }
  }
  blobFile = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  })
  
}
