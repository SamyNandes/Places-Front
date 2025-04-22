import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LugarService } from '../lugar.service';

@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.component.html',
  styleUrl: './lugar.component.scss'
})
export class LugarComponent implements OnInit{
  dadosDoFormsLugares: FormGroup;
  categorias: Categoria[] = [];

  constructor(private serviceCategoria: CategoriaService, private serviceLugares: LugarService){
    this.dadosDoFormsLugares = new FormGroup({
      nome: new FormControl('', Validators.required),
      categorias: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      foto: new FormControl('', Validators.required),
      avaliacao: new FormControl('', Validators.required)
    })
  }
  ngOnInit(){
    this.serviceCategoria.obterTodasCategorias().subscribe( dados => {
      this.categorias = dados
    })
  }
  salvarDadosFormsLugares(){
    this.serviceLugares.salvarLugar(this.dadosDoFormsLugares.value)
  }
}
