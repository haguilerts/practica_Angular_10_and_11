import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-empledo',
  templateUrl: './detalle-empledo.component.html',
  styleUrls: ['./detalle-empledo.component.scss']
})
export class DetalleEmpledoComponent implements OnInit {
  EmpleadoID:any=null;
  constructor(private activatedRoter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoter.params.subscribe((params)=>{
        console.log(params)
        this.EmpleadoID=params.idEmpleado
    })
  }

}
