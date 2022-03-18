import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriaModel } from './categoriaModel';

@Injectable()
export class CategoriaService {
    
    host:string = 'http://localhost:8181/';

    constructor(private http: HttpClient) { }

    listaCategorias(pagina:string) {
        return this.http.get<any>(this.host + pagina)
            .toPromise()
            .then(res => <CategoriaModel[]>res.data)
            .then(data => { return data; });
    }

}