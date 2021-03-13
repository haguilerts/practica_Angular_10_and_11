import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations:[
    trigger('cambiarColor',[
      state('rojo',style({
        'background-color': 'red'
        }) 
      ),
      state('amarillo',style({
        'background-color': 'yellow',
        'transform':'scale(1.5)'
        }) 
      ),
      state('verde',style({
        'background-color': 'rgb(38, 255, 38)'
        }) 
      ),
     // transition('* => *', animate(500)),// cualquiera(*) => (*) - para todos por default
      transition('rojo => verde', animate(3000)),
      transition('verde => amarillo', animate('.5s ease-in')),
      transition('void => *', [
        animate(10000, keyframes([
          style({ opacity:0,    transform:'translateX(0px)',      offset:0   , border:'5px solid blue'}),
          style({ opacity:0.25,    transform:'translateX(250px)',  offset:0.25   , border:'10px solid cyan'}),
          style({ opacity:0.5,    transform:'translateX(500px)', offset:0.5, border:'10px solid cyan'  }),
          style({ opacity:0.75,    transform:'translateX(250px)', offset:0.75, border:'10px solid cyan'  }),
          style({ opacity:1,    transform:'translateX(0px)',      offset:1  , border:'5px solid blue' })
        ]))      
      ]), // comienzo de la transicion 
      /* transition('void => *', [
        style({ 'transform':'translateX(200px)' }),
        animate(1000)
      ]), */

    ])
  ]
})
export class AnimationComponent implements OnInit {
  color:string
  constructor() {
    this.color='verde'
   }

  ngOnInit(): void {
    setInterval( ()=>{
      switch(this.color){
        case 'verde':
            this.color='amarillo';
            break;
        case 'amarillo':
            this.color='rojo';
            break;
        case 'rojo':
            this.color='verde';
            break;
      }
    },2000)
  }

}
