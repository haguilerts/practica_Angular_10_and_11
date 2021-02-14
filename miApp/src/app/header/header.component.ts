import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  menu:string="Home";
  nuevo:string="Nuevo";
  link:string="Link";
  contacto:string="Contacto";

  constructor() { }

  ngOnInit(): void {
  }

}
