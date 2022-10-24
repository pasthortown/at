import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output('modal_event') modal_event: EventEmitter<any> = new EventEmitter();
  @Input('item_income') item_income: any = null;

  item: any = null;

  constructor() { }

  ngOnInit(): void {
    this.item = {
      item_id: '',
      categoria: '',
      nombre: '',
      RUC: '',
      descripcion: '',
      contacto_phone: '',
      contacto_mail: ''
    };
  }

  ngOnChanges() {
    this.item = JSON.parse(JSON.stringify(this.item_income));
  }

  onReturn(button_text: string) {
    let toReturn: any = {
      button_text: button_text,
      data: this.item
    };
    this.modal_event.emit(toReturn);
  }
}
