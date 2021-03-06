import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  myformulario:FormGroup
  /* 
  *   valid(true) -- invalid(false) /
  *   pristine(no se escribio nada) -- dirty(cuando se escribio una letra como min) /
  *   untouched(no tiene el foco) -- touched(si tenia el foco cuando sali)
  */
  constructor() {
    this.myformulario=new FormGroup({
      nombre:new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(5),
      ]),
      apellido:new FormControl('Aguilar',[
        Validators.required,
        Validators.maxLength(7),
      ]),
      edad:new FormControl('10',[
        Validators.required, // sirve para validar los campos true / false
        this.edadValidador
        //Validators.pattern(/^0[1-99]{2}$/),//pattern(/ ExpRegular /),
      ]),
      dni:new FormControl('',[
        Validators.required,
        Validators.minLength(14),
        //Validators.maxLength(8),
        this.dniValidador
      ]),
      pas:new FormControl(''),
      repit_pas:new FormControl(''),
      email:new FormControl('',[
        Validators.required,
        //Validators.email,// -  solo verifica q hay @h o @g
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)//pattern(/ ExpRegular /)
      ]),
      acepto:new FormControl(''),
      id:new FormControl('001'),
    })
  }
  /* validadores de Email(con Expeciones Regulares): https://regexlib.com/Search.aspx?k=email&c=1&m=-1&ps=20  */

  ngOnInit(): void {
  }
  onSubmit(formValue:any){
    console.log(formValue)
  }
  onFormulario(){
    console.log(this.myformulario.value)
  }
  edadValidador(formControl:any){
    const value=formControl.value
    const max=18
    const min=0
    if(value>min && value<=max){
      return null
    }else{
      return {"max ":max}//{ Rango_Edad:{max, min}}
    }
    console.log(value)
  }
  dniValidador(formControl:any){
    const value=formControl.value;
    if(/^([0-9]{11}|[0-9]{2}-[0-9]{8}-[0-9]{1})$/g.test(value)){
      const num=value.substr(0,value.length-1);
      const letra=value.charAt(value.length-1);
      console.log(num,letra)
    }
    return null;
  }

  //---------------------------
}
