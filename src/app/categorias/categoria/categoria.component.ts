import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {
dadosForms: FormGroup;

constructor(private service: CategoriaService){
  this.dadosForms = new FormGroup({
    nome: new FormControl("", Validators.required),
    descricao: new FormControl("", Validators.required)
  })
}
mostrarConsolelog(){
  if(this.dadosForms.valid){
    this.service.salvarCategoria(this.dadosForms.value).subscribe( x => {
      console.log(x)
    })
  }
}
campoObrigatorioInvalido(nomeCampo: string): boolean {
const campo = this.dadosForms.get(nomeCampo)
return !!(campo?.invalid && campo?.touched)
  }
}
