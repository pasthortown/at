import { CatalogService } from 'src/app/services/catalog.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProveedoresPageRoutingModule } from './proveedores-page-routing.module';
import { ProveedoresPageComponent } from './proveedores-page.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    ProveedoresPageComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    ProveedoresPageRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    CatalogService
  ]
})
export class ProveedoresPageModule { }
