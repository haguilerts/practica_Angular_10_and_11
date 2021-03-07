import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-empleado',
  templateUrl: './formulario-empleado.component.html',
  styleUrls: ['./formulario-empleado.component.scss']
})
export class FormularioEmpleadoComponent implements OnInit {
  formNewEmpleado:FormGroup
  constructor() { 
    this.formNewEmpleado=new FormGroup({
      name:   new FormControl('gio',[
        Validators.required,
        Validators.minLength(3),
        this.validarName,
      ]),
      surname: new FormControl(''),
      age:     new FormControl('12'),
      sexo:     new FormControl(true),
      email:    new FormControl('Kevin'),
      pas:      new FormControl('',[
        Validators.required,
        this.validatePassword
      ]),
      departamento: new FormControl('puntalara 12'),
      cuil:     new FormControl('99-54949999-0'),
      img:      new FormControl('img'),
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.formNewEmpleado.value)
  }
  validarName(a:any){
    console.log(typeof a.value)
    let error=null
   /*  if(typeof parseInt(a.value)=='number'){
      console.log('el valor es una numero',parseInt(a.value))
      error = {  dollar: 'no ingresar un numero' };
      return error
    } */
    if( a.value.length >5){
      console.log('el valor es una string',a.value)
      error = {  dollar: 'no ingresar  mas de 5 digitos' };
      return error
    } 
    return error
  }
  private validatePassword(control: AbstractControl) {
    const password = control.value;
    let error = null;
    if (!password.includes('$')) {
      error = { dollar: 'no ingresar un simbolo' };
    }
    if (!parseFloat(password[0])) {
      error = {  number: 'ingrese un caracter' };
    }
    return error;
  }
  /* match(controlKey: string) {
    return (control: AbstractControl): { [s: string]: boolean } => {
      // control.parent es el FormGroup
      if (control.parent) { // en las primeras llamadas control.parent es undefined
        //const checkValue = control.parent.controls{}.value;// parent.controls[controlKey].value;
        if (control.value !== checkValue) {
          return {
            match: true
          };
        }
      }
      return null;
    };
  } */
}
