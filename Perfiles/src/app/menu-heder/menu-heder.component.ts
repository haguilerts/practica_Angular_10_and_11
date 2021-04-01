import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-heder',
  templateUrl: './menu-heder.component.html',
  styleUrls: ['./menu-heder.component.scss']
})
export class MenuHederComponent implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit(): void {
  }
  irPagina(url:string){
    this.ruta.navigate([url]);
  }

}
