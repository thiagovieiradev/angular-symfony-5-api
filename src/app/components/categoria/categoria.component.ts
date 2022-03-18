import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaApiService } from 'src/app/services/categoria-api.service';
import { Categoria } from './categoriaModel';
import { CategoriaService } from './categoriaService';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  //lista: any = [];

  categorias:any = [];

  categoria: Categoria[];

  first = 0;

  rows = 10;

  pagina: string;
  
  constructor(private categoriaService: CategoriaService, private provider: CategoriaApiService, private router: Router) { }

  ngOnInit(): void {
    //this.lista = [];
    //this.carregarCategorias();
    
    this.pagina = 'categorias';    
    this.categoriaService.listaCategorias(this.pagina).then(categoria => this.categoria = categoria);

  }

  // carregarCategorias(){
  //   this.lista = [];    
  //   return new Promise(resolve => {
  //     const dados = {
  //     };
  //     this.provider.categoriaApi(dados, 'categorias').subscribe(categorias => {                
  //       for(const categoria of categorias['result']){
  //         this.lista.push(categoria);          
  //       }
  //       resolve(true);
  //     });
  //   });
  // }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
      this.first = this.first - this.rows;
  }

  reset() {
      this.first = 0;
  }

  isLastPage(): boolean {
      return this.categoria ? this.first === (this.categoria.length - this.rows): true;
  }

  isFirstPage(): boolean {
      return this.categoria ? this.first === 0 : true;
  }

}
