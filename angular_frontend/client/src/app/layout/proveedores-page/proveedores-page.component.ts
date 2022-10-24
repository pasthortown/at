import { Swal } from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CatalogDMZService } from 'src/app/services/catalog-dmz.service';
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

  item_selected: any = null;
  item_is_selected: boolean = false;

  collectionSize: number = 0;
  page: number = 1;
  pageSize: any = 5;

  modal_reference: any;

  constructor(private modalService: NgbModal, private service_CatalogDMZ: CatalogDMZService, private service_Catalog: CatalogService) { }

  ngOnInit(): void {
    this.nuevo();
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

  search_data() {}

  delete() {
    this.service_Catalog.delete_item(this.item_selected.item_id, this.db, this.folder).then( r => {
      Swal.fire(
        'Eliminación de Proveedor!',
        'Proveedor eliminado satisfactoriamente',
        'success'
      ).then( (result: any) => {
        this.refreshTable()
      });
    }).catch( e => { console.log(e); });
  }

  refreshTable() {
    let output_model = {
      item_id: 1,
      categoria: 1,
      nombre: 1,
      RUC: 1,
      descripcion: 1,
      contacto_phone: 1,
      contacto_mail: 1
    };
    this.service_Catalog.get_items(this.db, this.folder, output_model).then( r => {
      this.items = r;
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

  process_modal_event(event: any) {
    this.modal_reference.close();
  }
}
