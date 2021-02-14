import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';
import { Item } from '../../Obj/item';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.less']
})
export class ItemsComponent implements OnInit {
 
  // con el input recibe un objeto del tipo input y lo guardo dentro de una variable para luego usarlo
  @Input() item:Item=new Item( );
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
   
  }
  onDelete(item:Item){
    this.deleteItem.emit(item);
  }


}
