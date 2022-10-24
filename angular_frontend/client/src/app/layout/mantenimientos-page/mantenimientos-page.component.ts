import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mantenimientos-page',
  templateUrl: './mantenimientos-page.component.html',
  styleUrls: ['./mantenimientos-page.component.scss']
})
export class MantenimientosPageComponent implements OnInit {

  filter: string = '';
  mantenimientos: any[] = [
    {
      estado: 'dummyState',
      nombre: 'dummyName',
      vehiculo: 'dummyVehiculoName',
      placa: 'dummyPlaca',
      descripcion: 'dummyAnotación',
      fecha_aplicacion: 'dummyFecha',
      costo: 'dummyPrecio'
    },
  ];
  mantenimiento_selected: any = null;

  collectionSize: number = 0;
  page: number = 1;
  pageSize: any = 5;

  constructor() { }

  ngOnInit(): void {
  }

  agregar() {}

  search_data(){}

  select_mantenimiento(data:string){}

  editar(){}

  eliminar(){}

  refreshTable(){}

  selectPage(page: string) {
    this.page = parseInt(page)
  }



}
