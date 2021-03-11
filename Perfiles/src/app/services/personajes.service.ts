import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  urlBase:string;
  constructor(private http:HttpClient) {
    this.urlBase='https://rickandmortyapi.com/api'
  }
  getAll( pPage=1):Promise<any>{
    return this.http.get<any>(`${this.urlBase}/character?page=${pPage}`).toPromise();
  }
}
