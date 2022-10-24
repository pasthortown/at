import { DateTimePickerModule } from './../../flota-elements/date-time-picker/date-time-picker.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OperadoresPageRoutingModule } from './operadores-page-routing.module';
import { OperadoresPageComponent } from './operadores-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OperadoresPageComponent
  ],
  imports: [
    CommonModule,
    OperadoresPageRoutingModule,
    FormsModule,
    DateTimePickerModule,
    NgbModule
  ],
  providers: []
})
export class OperadoresPageModule { }
