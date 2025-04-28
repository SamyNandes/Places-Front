import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'paginas',
    loadChildren: () => import('./template/template.module').then(m => m.TemplateModule)
  },
  {
    path: '',
    loadChildren: () => import('./landing-pages/landing-pages.module').then(m => m.LandingPagesModule)
  }
];
