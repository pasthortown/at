import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
;

import { CatalogoServiciosPageRoutingModule } from './catalogo-servicios-page-routing.module';
import { CatalogoServiciosPageComponent } from './catalogo-servicios-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CatalogoServiciosPageComponent
  ],
  imports: [
    CommonModule,
    CatalogoServiciosPageRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: []
})
export class CatalogoServiciosPageModule { }
