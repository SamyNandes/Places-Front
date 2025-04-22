import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { Categoria } from './categoria';
import { title } from 'process';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private htpp: HttpClient) { }
  urlCategoria: string = "http://localhost:3000/categorias"
  salvarCategoria(categoria: Categoria ): Observable<Categoria>{
    console.log("salvando a categoria!", categoria)
    return this.htpp.post<Categoria>(this.urlCategoria, categoria)
  }
  obterTodasCategorias(): Observable<Categoria[]>{
    return this.htpp.get<Categoria[]>(this.urlCategoria)
  }
}
