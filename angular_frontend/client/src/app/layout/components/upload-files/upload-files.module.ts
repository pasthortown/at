import { FormsModule } from '@angular/forms';
import { UploadFilesComponent } from './upload-files.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFileDropModule } from 'ngx-file-drop';
import { CatalogService } from 'src/app/services/catalog.service';

@NgModule({
  declarations: [UploadFilesComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxFileDropModule
  ],
  exports: [UploadFilesComponent],
  providers: [CatalogService]
})
export class UploadFilesModule { }
