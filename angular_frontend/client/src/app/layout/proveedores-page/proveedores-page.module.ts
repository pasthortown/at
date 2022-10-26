import { TableModule } from './../components/table/table.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProveedoresPageRoutingModule } from './proveedores-page-routing.module';
import { ProveedoresPageComponent } from './proveedores-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProveedoresPageComponent
  ],
  imports: [
    CommonModule,
    ProveedoresPageRoutingModule,
    FormsModule,
    NgbModule,
    TableModule
  ]
})
export class ProveedoresPageModule { }
