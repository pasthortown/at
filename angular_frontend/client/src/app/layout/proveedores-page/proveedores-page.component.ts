import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-proveedores-page',
  templateUrl: './proveedores-page.component.html',
  styleUrls: ['./proveedores-page.component.scss']
})
export class ProveedoresPageComponent implements OnInit {

  db: string = 'flota';
  folder: string = 'proveedores';

  filter: string = '';
  items: any[] = [];
  items_filtered: any[] = [];
  items_filtered_slice_shown: any[] = [];

  item_selected: any = null;
  item_is_selected: boolean = false;

  collectionSize: number = 0;
  page: number = 1;
  pageSize: any = 5;

  modal_reference: any;

  constructor(private spinner: NgxSpinnerService,private modalService: NgbModal, private service_Catalog: CatalogService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.nuevo();
    this.get_items();
  }

  nuevo() {
    this.item_selected = {
      item_id: '',
      categoria: '',
      nombre: '',
      RUC: '',
      descripcion: '',
      contacto_phone: '',
      contacto_mail: ''
    };
    this.item_is_selected = false;
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
        }).catch( e => {
          this.spinner.hide();
          console.log(e);
          Swal.fire(
            'Eliminación de registro!',
            'Error al eliminar el registro',
            'error'
          ).then( (result: any) => {
            this.get_items();
          });
        });
      }
    });
  }

  get_items() {
    let output_model = {
      item_id: 1,
      categoria: 1,
      nombre: 1,
      RUC: 1,
      descripcion: 1,
      contacto_phone: 1,
      contacto_mail: 1
    };
    this.spinner.show();
    this.service_Catalog.get_items(this.db, this.folder, output_model).then( r => {
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

  open_modal(content: any) {
    this.modal_reference = this.modalService.open(content, {centered: true, size: 'lg', backdrop: 'static', keyboard: false});
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
