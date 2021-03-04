import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  myformulario:FormGroup
  constructor() {
    this.myformulario=new FormGroup({
      nombre:new FormControl(),
      apellido:new FormControl(),
      edad:new FormControl(),
      dni:new FormControl(),
      pas:new FormControl(),
      repit_pas:new FormControl(),
      email:new FormControl(),
      acepto:new FormControl(),
    })
  }

  ngOnInit(): void {
  }
  onSubmit(formValue:any){
    console.log(formValue)
  }
  onFormulario(){
    console.log(this.myformulario.value)
  }
}
