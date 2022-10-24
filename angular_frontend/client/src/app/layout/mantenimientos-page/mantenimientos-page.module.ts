import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { MantenimientosPageRoutingModule } from './mantenimientos-page-routing.module';
import { MantenimientosPageComponent } from './mantenimientos-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MantenimientosPageComponent
  ],
  imports: [
    CommonModule,
    MantenimientosPageRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: []
})
export class MantenimientosPageModule { }
