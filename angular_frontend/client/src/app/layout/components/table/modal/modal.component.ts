import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output('modal_event') modal_event: EventEmitter<any> = new EventEmitter();
  @Input('item_income') item_income: any = null;
  @Input('item_definition') item_definition: any = null;
  @Input('translations') translations: any = null;

  item: any =  {item_id: ''};

  constructor() { }

  ngOnInit(): void {
  }

  compare_with_definition(default_value: any) {
    let toReturn: any = {item_id: default_value};
    Object.keys(this.item_definition).forEach( (key_definition: any) => {
      let existe = false;
      Object.keys(toReturn).forEach( (key_output_model: any) => {
        if (key_output_model == key_definition) {
          existe = true;
        }
      });
      if (!existe) {
        toReturn[key_definition] = default_value;
      }
    });
    return toReturn;
  }

  ngOnChanges() {
    if (this.item_definition != null) {
      this.item = this.compare_with_definition('');
      if (this.item_income != null) {
        for (let [key_income, value_income] of Object.entries(this.item_income)) {
          for (let [key, value] of Object.entries(this.item)) {
            if (key == key_income) {
              this.item[key] = value_income;
            }
          }
        }
      }
    }
  }

  translation(toTranslate: string): string {
    let toReturn: string = toTranslate;
    try {
      toReturn = this.translations[toTranslate];
    } catch(e) {
      toReturn = toTranslate;
    }
    return toReturn;
  }

  get_keys(item: any): any[] {
    let toReturn: any[] = [];
    try {
      Object.keys(item).forEach(key => {
        if (key != 'item_id') {
          toReturn.push(key);
        }
      });
    } catch(e) {
      toReturn = [];
    }
    return toReturn;
  }

  onReturn(button_text: string) {
    let toReturn: any = {
      button_text: button_text,
      data: this.item
    };
    this.modal_event.emit(toReturn);
  }
}
