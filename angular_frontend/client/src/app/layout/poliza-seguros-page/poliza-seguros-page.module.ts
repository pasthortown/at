import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { PolizaSegurosPageRoutingModule } from './poliza-seguros-page-routing.module';
import { PolizaSegurosPageComponent } from './poliza-seguros-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PolizaSegurosPageComponent
  ],
  imports: [
    CommonModule,
    PolizaSegurosPageRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: []
})
export class PolizaSegurosPageModule { }
