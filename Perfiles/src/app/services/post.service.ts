import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { promise } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl:string;

  constructor(private httpClient:HttpClient) { 
    this.baseUrl='https://jsonplaceholder.typicode.com/comments?postId=1';
  }

  getAll():Promise<any[]>{
    return this.httpClient.get<any[]>(this.baseUrl).toPromise();
  }
  getById(id:number):Promise<any>{
    return this.httpClient.get<any>(`${this.baseUrl}&&id=${id}`).toPromise();
  }
  postById(obj:any):Promise<any>{
    const bodyRequest=obj
    return this.httpClient.post<any>(this.baseUrl,bodyRequest).toPromise();
  }
  postForm(obj:any):Promise<any>{
    const httpOption={
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTP-8'
      })
    }
    return this.httpClient.post<any>(this.baseUrl,obj,httpOption).toPromise();

  }
  update(obj:any):Promise<any>{
    let idUser:any=0
    if(obj.id){
      idUser=obj.id
    } else{
      (idUser=1);
    } 
    this.baseUrl= 'https://jsonplaceholder.typicode.com/users'
    return this.httpClient.put(`${this.baseUrl}/${idUser}`,obj).toPromise();
  }
  delete(obj:any):Promise<any>{
    this.baseUrl= 'https://jsonplaceholder.typicode.com/users'
    return this.httpClient.delete(`${this.baseUrl}/${obj.id}`).toPromise();
  }
}
