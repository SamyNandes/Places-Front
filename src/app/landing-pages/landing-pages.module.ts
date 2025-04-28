import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPagesRoutingModule } from './landing-pages-routing.module';
import { LandingPagesComponent } from './landing-pages/landing-pages.component';


@NgModule({
  declarations: [
    LandingPagesComponent
  ],
  imports: [
    CommonModule,
    LandingPagesRoutingModule
  ]
})
export class LandingPagesModule { }
