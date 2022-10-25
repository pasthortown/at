import { TableComponent } from './table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CatalogService } from 'src/app/services/catalog.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    TableComponent,
    ModalComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    NgbModule
  ],
  providers: [
    CatalogService
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
