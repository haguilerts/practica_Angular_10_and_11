import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../Obj/item';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.less']
})
export class TotalComponent implements OnInit {
  @Input() total:number=0;
  @Input() msn:string='';

  constructor() { }

  ngOnInit(): void {

  }
  
}
