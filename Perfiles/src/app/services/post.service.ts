import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
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
}
