import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lugar } from './lugar';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LugarService {
  url = "http://localhost:3000/lugares"
  constructor(private http: HttpClient) { }

  salvarLugar(lugarParaSalvar: Lugar){
    this.http.post(this.url, lugarParaSalvar).subscribe( x => {
      console.log("Dados salvos!", x)
    })
  }
  obterTodos(): Observable<Lugar[]>{
    return this.http.get<Lugar[]>(this.url)
  }
  obterLugaresEspecificos(lugar: string, categoria: string): Observable<Lugar[]>{
    let parametros = new HttpParams()
    if(categoria){
      parametros = parametros.set("categoria", categoria )
    }
    if(lugar){
      parametros = parametros.set("nome_like", lugar )
    }
    return this.http.get<Lugar[]>(this.url, {
      params: parametros
    })
  }
}
