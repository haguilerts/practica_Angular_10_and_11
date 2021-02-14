import { Component, OnInit } from '@angular/core';
import {Item} from '../Obj/item';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.less']
})
export class NewComponent implements OnInit {
  saludar='Hola, buenos dias como estas??';
  despedir='chauuu, fue un gusto conocerte!';
  items:Item[]=[];

  total:number=0;

  ngOnInit(): void {
    this.items=[
      {
        id:0,    
        img:"../../assets/img/Manzana.jpg",    
        title:'Manzana',        
        text:'La manzana es una fruta comestible. Tiene forma de globo, un poco hundida en sus extremos. Su epicarpio es verdoso o amarillento y presenta semillas de tamaño pequeño, protegidas. Existen miles de variedades de manzanas.',
        price:10.5,
        quantity:4,
        completed:false
      },
      {
        id:1,
        img:"../../assets/img/Pan.jpg",
        title:'Pan',        
        text:'El pan es rico en hidratos de carbono, aporta proteínas de origen vegetal, ya que proviene del grano de cereal, fibra, vitaminas del grupo B (B1, B2, B3, B6), minerales (fósforo, magnesio y potasio) y además de todo esto apenas contiene grasa.',
        price:3.5,
        quantity:8,
        completed:true
      },
      {
        id:2,
        img:"../../assets/img/Pan_Dulce.jpg",
        title:'Pan Dulce',        
        text:'El pan dulce contiene, además de los ingredientes convencionales de la masa de pan, frutas secas y confitadas, frutos secos, manteca y mantequilla, azúcar, cítricos que dan sabor y aromatizan, huevos y leche, lo que determina su alto aporte de calorías.30 ',
        price:100,
        quantity:20,
        completed:false
      },
      {
        id:3,
        img:"../../assets/img/Caramelo.jpg",
        title:'Caramelo',        
        text:'El caramelo es un alimento preparado generalmente a base de azúcar fundido. El caramelo se consigue mediante la cocción de azúcares. Este puede consumirse tanto líquido (tal es el caso del caramelo que se añade por encima del flan), como sólido.',
        price:12.6,
        quantity:12,
        completed:true
      }
    ]
    this.getTotal();
  }
  constructor() { }
  deleteItem(item:Item){
    this.items=this.items.filter(x => x.id != item.id );
  //  this.getTotal();
  }
  onDelete(item:Item){
    this.deleteItem(item)
  }
  getTotal(){
    this.total=this.items
              .filter(i => !i.completed)
              .map(i => i.quantity * i.price)
              .reduce( (acc, i) => acc+=i, 0);
  }
}
