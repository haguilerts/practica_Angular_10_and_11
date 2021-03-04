import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit(): void {
  }
  irPagina(url:string){
    this.ruta.navigate([url]);
  }
}
