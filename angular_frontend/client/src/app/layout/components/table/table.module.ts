import { UploadFilesModule } from './../upload-files/upload-files.module';
import { TableComponent } from './table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CatalogService } from 'src/app/services/catalog.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { environment } from 'src/environments/environment';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    TableComponent,
    ModalComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    NgbModule,
    UploadFilesModule,
    AgmCoreModule.forRoot({
      apiKey: environment.gmapapiKey,
      apiVersion: '3.31'
    }),
  ],
  providers: [
    CatalogService
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
