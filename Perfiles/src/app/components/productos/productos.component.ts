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
  postForm(){
    objFormulario:{usu:'agui'}
    try {
  
      //const resp = await this.posService.postForm(this.formulario.value);
    } catch (error) {
      
    }
  }
  update(){
    this.posService.update({
      id:5,
      name:'gio',
      email:'gio@gmail.com',
      username:'haguilerts'
    }).then(res=>console.log(res))
    .catch(error=>console.log(error))
  }
  async borrar(){
    try {
      const borrar= await this.posService.delete(1)
      console.log(borrar)
    } catch (error) {
      console.log(error)
    }
   
  }
}
