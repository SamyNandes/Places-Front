import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: "home",
        loadChildren: () => import('../categorias/categorias.module').then(x => x.CategoriasModule),
        data : { titulo: 'Categorias', subTitulo: 'Realize o cadastro de novas categorias' }
      },
      {
        path: "lugares",
        loadChildren: () => import('../lugares/lugares.module').then(x => x.LugaresModule),
        data: { titulo: 'Lugares', subTitulo: 'Realize o cadastro de novos lugares' }
      },
      {
        path: "galerias",
        loadChildren: () => import('../galerias/galerias.module').then(x => x.GaleriasModule),
        data: { titulo: 'Lista de lugares legais', subTitulo: 'Descubra os melhores lugares para explorar e se divertir' }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
