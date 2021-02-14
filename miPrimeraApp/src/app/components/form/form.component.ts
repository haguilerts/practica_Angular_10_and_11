import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Tarea } from '../../models/tarea.model';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() prod_Creada:EventEmitter<Tarea>;
  nuevaTare:Tarea;
  constructor() {
    this.nuevaTare=new Tarea();
    this.prod_Creada=new EventEmitter();
   }

  ngOnInit(): void {

  }
  onClick(){
   console.log(this.nuevaTare)
  this.prod_Creada.emit(this.nuevaTare)
  this.nuevaTare=new Tarea();

  }

}
