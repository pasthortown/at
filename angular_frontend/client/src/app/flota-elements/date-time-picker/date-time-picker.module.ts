import { DateTimePickerComponent } from './date-time-picker.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  exports: [DateTimePickerComponent],
  declarations: [DateTimePickerComponent],
  imports: [
    CommonModule
  ]
})
export class DateTimePickerModule { }
