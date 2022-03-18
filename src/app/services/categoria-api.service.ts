import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CategoriaApiService {

  host:string = 'http://localhost:8181/';

  constructor(private http:HttpClient) { }

  categoriaApi(dados:any, api:string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };
    const url = this.host + api;
    return this.http.get(url, httpOptions).map(res => res);    
    //return this.http.post(url, JSON.stringify(dados), httpOptions).map(res => res);    
  }
  
}
