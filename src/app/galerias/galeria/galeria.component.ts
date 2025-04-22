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
  constructor(private serviceLugares: LugarService, private categoriaServices: CategoriaService){}
  ngOnInit(): void {
    this.serviceLugares.obterTodos().subscribe(
      x => this.Lugares = x
    )
    this.categoriaServices.obterTodasCategorias().subscribe(
      y => this.Categorias = y
    )
  }
}
