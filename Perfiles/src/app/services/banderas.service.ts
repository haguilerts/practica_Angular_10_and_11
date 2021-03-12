import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BanderasService {
  urlBase:string
  constructor(private http:HttpClient) { 
    this.urlBase='http://restcountries.eu/rest/v2/region/europe'
  }
  getPaises():Promise<any[]>{
    return this.http.get<any[]>(`${this.urlBase}`).toPromise();
  }
}
