import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poliza-seguros-page',
  templateUrl: './poliza-seguros-page.component.html',
  styleUrls: ['./poliza-seguros-page.component.scss']
})
export class PolizaSegurosPageComponent implements OnInit {

  filter: string = '';
  polizas: any[] = [
    {
      nombre: 'dummyName',
      cobertura: 'dummyDescripción',
      costo: 'dummyMarca'
    },
  ];
  poliza_selected: any = null;

  collectionSize: number = 0;
  page: number = 1;
  pageSize: any = 5;
  constructor() { }

  ngOnInit(): void {
  }

  agregar() {}

  search_data(){}

  select_poliza(data:string){}

  mantenimiento(){}

  combustible(){}

  editar(){}

  eliminar(){}

  refreshTable(){}

  selectPage(page: string) {
    this.page = parseInt(page)
  }

}
