import { Component, OnInit } from '@angular/core';
import { LugarService } from '../../lugares/lugar.service';
import { Lugar } from '../../lugares/lugar';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent implements OnInit{
  Categorias: Categoria[] = []
  Lugares: Lugar[] = []
  pesquisarNomeLocal: string = ""
  pesquisarCategoria: string = ""
  novoLugar: Lugar[] = []
  estadoPesquisa: Boolean = true;
  constructor(private serviceLugares: LugarService, private categoriaServices: CategoriaService){}
  ngOnInit(): void {
    this.serviceLugares.obterTodos().subscribe(
      x => this.Lugares = x
    )
    this.categoriaServices.obterTodasCategorias().subscribe(
      y => this.Categorias = y
    )
  }

  trocarEstrelas(lugar: Lugar){
    const avaliacaoNumero = parseInt(lugar.avaliacao!)
    const avaliacaoNumeroEstrelaVazia = 5 - avaliacaoNumero
    return '&#9733'.repeat(avaliacaoNumero) + '&#9734;'.repeat(avaliacaoNumeroEstrelaVazia)
  }
  procurarLocal(){
    if(this.pesquisarCategoria == "" && this.pesquisarNomeLocal == ""){
      this.estadoPesquisa = false
    }
    this.serviceLugares.obterLugaresEspecificos(this.pesquisarNomeLocal, this.pesquisarCategoria).subscribe(
      x =>{
        this.Lugares = x
        if(this.Lugares.length == 0){
          this.estadoPesquisa = false
          console.log("bucetona")
        } else {
          this.estadoPesquisa = true
        }
      }
    )
  }
}
