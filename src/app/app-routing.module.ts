  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';

  const routes: Routes = [
    {
      path: 'paginas',
      loadChildren: () => import('./template/template.module').then(m => m.TemplateModule),
      canActivate: [authGuard]
    },
    {
      path: '',
      loadChildren: () => import('./landing-pages/landing-pages.module').then(m => m.LandingPagesModule)
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
