  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';

  const routes: Routes = [
    {
      path: 'paginas',
      loadChildren: () => import('./template/template.module').then(x => x.TemplateModule)
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
