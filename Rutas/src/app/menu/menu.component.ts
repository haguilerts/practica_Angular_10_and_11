import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { 
    
  }

  ngOnInit(): void {
  }
  onclick(pRuta:string){
    console.log(this.router.navigate([pRuta]))
    this.router.navigate([pRuta]); 
    // atraves del obj ruter accedo al "app-routing-module.ts" cambiarle la ruta del link. pasando como paramereo la pag
  }
}
