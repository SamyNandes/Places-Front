import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { GaleriasRoutingModule } from './galerias-routing.module';
import { GaleriaComponent } from './galeria/galeria.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GaleriaComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    GaleriasRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,

  ]
})
export class GaleriasModule { }
