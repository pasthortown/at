import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo-servicios-page',
  templateUrl: './catalogo-servicios-page.component.html',
  styleUrls: ['./catalogo-servicios-page.component.scss']
})
export class CatalogoServiciosPageComponent implements OnInit {

  filter: string = '';
  servicios: any[] = [
    {
      nombre: 'dummyName',
      proveedor: 'dummySupplier',
      descripion: 'dummyDescription',
      costo: 'dummyPrize',
    },
  ];
  servicio_selected: any = null;

  collectionSize: number = 0;
  page: number = 1;
  pageSize: any = 5;

  constructor() { }

  ngOnInit(): void {
  }

  agregar() {}

  search_data(){}

  select_servicio(data:string){}

  editar(){}

  eliminar(){}

  refreshTable(){}

  selectPage(page: string) {
    this.page = parseInt(page)
  }

}
