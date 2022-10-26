import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CatalogService } from 'src/app/services/catalog.service';
import { FileSaverService } from 'ngx-filesaver';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input('item_definition') item_definition: any = null;
  @Input('translations') translations: any = null;
  @Input('db') db: string = '';
  @Input('folder') folder: string = '';

  output_model: any = {item_id: 1};
  filter: string = '';
  items: any[] = [];
  items_filtered: any[] = [];
  items_filtered_slice_shown: any[] = [];
  item_selected: any =  {item_id: ''};
  item_is_selected: boolean = false;
  collectionSize: number = 0;
  page: number = 1;
  pageSize: any = 5;
  modal_reference: any;

  constructor(private fileServerService: FileSaverService, private spinner: NgxSpinnerService,private modalService: NgbModal, private service_Catalog: CatalogService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.item_definition != null) {
      this.output_model = this.compare_with_definition(1);
      this.item_is_selected = this.compare_with_definition('');
      if (this.db != '' && this.folder != '') {
        this.get_items();
        this.refresh();
      }
    }
  }

  refresh() {
    this.start_item_selected();
    this.item_is_selected = false;
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

  translation(toTranslate: string): string {
    let toReturn: string = toTranslate;
    try {
      toReturn = this.translations[toTranslate];
    } catch(e) {
      toReturn = toTranslate;
    }
    return toReturn;
  }

  json_to_object(json: string): any {
    return JSON.parse(json);
  }

  download_file(item_id: string) {
    let output_model = {
      file_base64: 1,
      name: 1,
      type: 1
    };
    this.spinner.show();
    this.service_Catalog.get_items('files', this.folder, output_model, {item_id: item_id}).then( r => {
      this.spinner.hide();
      let item: any = r[0];
      this.download(item);
    }).catch( e => { console.log(e); });
  }

  download(item: any) {
    const byteCharacters = atob(item.file_base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
       byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: item.type});
    this.fileServerService.save(blob, item.name);
  }

  get_values(item: any): any[] {
    let toReturn: any[] = [];
    try {
      for (let [key, value] of Object.entries(item)) {
        if (key != 'item_id' && key != 'timestamp' && key != '_id') {
          toReturn.push({ key: key, value: value });
        }
      }
    } catch(e) {
      toReturn = [];
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

  start_item_selected() {
    this.item_is_selected = false;
    this.item_selected = this.compare_with_definition('');
  }

  search_data() {
    this.items_filtered = this.search();
    this.collectionSize = this.items_filtered.length;
    this.build_table_slice();
  }

  build_table_slice() {
    let initial_slice: number = (this.page - 1) * Number.parseInt(this.pageSize);
    let end_slice: number = initial_slice + Number.parseInt(this.pageSize);
    this.items_filtered_slice_shown = this.items_filtered.slice(initial_slice, end_slice);
  }

  search(): any[] {
    return this.items.filter((item: any) => {
      const term: string = this.filter.toLowerCase();
      let toReturn = false;
      Object.values(item).forEach( (value: any) => {
        if (value.toString().toLowerCase().includes(term)) {
          toReturn = true;
        }
      });
      return toReturn;
    });
  }

  delete() {
    Swal.fire({
      title: 'Confirmación',
      html: '¿Está seguro que desea eliminar el registro seleccionado?',
      icon: 'warning',
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    })
    .then((result: any) => {
      if (result.value) {
        this.spinner.show();
        this.service_Catalog.delete_item(this.item_selected.item_id, this.db, this.folder).then( r => {
          this.spinner.hide();
          Swal.fire(
            'Eliminación de registro!',
            'Registro eliminado satisfactoriamente',
            'success'
          ).then( (result: any) => {
            this.get_items();
          });
        }).catch( e => { console.log(e); });
      }
    });
  }

  get_items() {
    this.spinner.show();
    this.service_Catalog.get_items(this.db, this.folder, this.output_model).then( r => {
      this.spinner.hide();
      this.items = r as any[];
      this.search_data();
    }).catch( e => { console.log(e); });
  }

  selectPage(page: string) {
    this.page = parseInt(page)
  }

  select_item(item: any) {
    this.item_selected = item;
    this.item_is_selected = true;
  }

  open_modal(modalContent: any) {
    this.modal_reference = this.modalService.open(modalContent, {centered: true, size: 'lg', backdrop: 'static', keyboard: false});
  }

  cancelar_modal() {
    Swal.fire({
      title: 'Confirmación',
      html: 'Al cerrar esta ventana, los cambios no se guardarán.',
      icon: 'warning',
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    })
    .then((result: any) => {
      if (result.value) {
        this.modal_reference.close();
      }
    });
  }

  process_modal_event(event: any) {
    if (event.button_text == 'Cancelar') {
      this.cancelar_modal();
    }
    if (event.button_text == 'Guardar') {
      Swal.fire({
        title: 'Confirmación',
        html: '¿Está seguro que desea almacenar los cambios realizados en el registro seleccionado?',
        icon: 'warning',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
      })
      .then((result: any) => {
        if (result.value) {
          let item_to_save = event.data;
          if (item_to_save.item_id == '') {
            this.spinner.show();
            this.service_Catalog.upload_items([item_to_save], this.db, this.folder).then( r => {
              this.spinner.hide();
              Swal.fire(
                'Almacenamiento de datos',
                'Registro almacenado satisfactoriamente',
                'success'
              ).then( (result: any) => {
                this.modal_reference.close();
                this.get_items();
              });
            }).catch( e => { console.log(e); });
          } else {
            this.spinner.show();
            this.service_Catalog.update_item(item_to_save.item_id, item_to_save, this.db, this.folder).then( r => {
              this.spinner.hide();
              Swal.fire(
                'Actualización de datos',
                'Registro actualizado satisfactoriamente',
                'success'
              ).then( (result: any) => {
                this.modal_reference.close();
                this.get_items();
              });
            }).catch( e => { console.log(e); });
          }
        }
      });
    }
  }
}
