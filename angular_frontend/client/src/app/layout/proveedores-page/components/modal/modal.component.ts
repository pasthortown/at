import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output('modal_event') modal_event: EventEmitter<any> = new EventEmitter();
  @Input('item_income') item_income: any = null;

  item: any = {
    item_id: '',
    categoria: '',
    nombre: '',
    RUC: '',
    descripcion: '',
    contacto_phone: '',
    contacto_mail: ''
  };

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges() {
    for (let [key_income, value_income] of Object.entries(this.item_income)) {
      for (let [key, value] of Object.entries(this.item)) {
        if (key == key_income) {
          this.item[key] = value_income;
        }
      }
    }
  }

  onReturn(button_text: string) {
    let toReturn: any = {
      button_text: button_text,
      data: this.item
    };
    this.modal_event.emit(toReturn);
  }
}
