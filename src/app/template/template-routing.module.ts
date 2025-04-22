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
        loadChildren: () => import('../categorias/categorias.module').then(x => x.CategoriasModule)
      },
      {
        path: "lugares",
        loadChildren: () => import('../lugares/lugares.module').then(x => x.LugaresModule)
      },
      {
        path: "galerias",
        loadChildren: () => import('../galerias/galerias.module').then(x => x.GaleriasModule)
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
