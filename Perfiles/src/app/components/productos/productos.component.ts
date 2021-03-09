import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  arrayPost:any[];
  constructor(private posService:PostService) {
    this.arrayPost=[]
  }

  ngOnInit(): void {
    this.posService.getAll()
    .then(post=>{
      this.arrayPost=post
      console.log(post)
    })
    .catch(error=>console.error(error))
  }
  async clickId(id:number){
    try {
       const get=await this.posService.getById(id)
      console.log(get)
    } catch (error) {
      console.log(error)
    }
   
  }
  postId(){
    this.posService.postById({
      id:101,
      name:'gio',
      email:'gio@gmail.com',
      body:'este es un cuerpo',
      
    }).then(res=>console.log(res))
    .catch(error=>console.log(error))
   
  }
}
