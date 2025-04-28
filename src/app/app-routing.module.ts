  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
import { LandingPagesModule } from './landing-pages/landing-pages.module';

  const routes: Routes = [
    {
      path: 'paginas',
      loadChildren: () => import('./template/template.module').then(x => x.TemplateModule)
    },
    {
      path: '',
      loadChildren: () => import('./landing-pages/landing-pages.module').then(x => x.LandingPagesModule)
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
