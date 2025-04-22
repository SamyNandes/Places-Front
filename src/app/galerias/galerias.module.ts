import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { GaleriasRoutingModule } from './galerias-routing.module';
import { GaleriaComponent } from './galeria/galeria.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    GaleriaComponent
  ],
  imports: [
    CommonModule,
    GaleriasRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class GaleriasModule { }
