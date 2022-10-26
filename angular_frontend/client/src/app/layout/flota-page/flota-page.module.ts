import { TableModule } from './../components/table/table.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FlotaPageRoutingModule } from './flota-page-routing.module';
import { FlotaPageComponent } from './flota-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FlotaPageComponent
  ],
  imports: [
    CommonModule,
    FlotaPageRoutingModule,
    FormsModule,
    NgbModule,
    TableModule
  ]
})
export class FlotaPageModule { }
