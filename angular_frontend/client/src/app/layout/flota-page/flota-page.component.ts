import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flota-page',
  templateUrl: './flota-page.component.html',
  styleUrls: ['./flota-page.component.scss']
})
export class FlotaPageComponent implements OnInit {

  filter: string = '';
  flota: any[] = [
    {
      nombre: 'Chevrolet blanco 1',
      placa: 'PCB-0597',
      marca: 'Chevrolet',
      modelo: 'NLR 511 EIV',
      color: 'Blanco'
    },
    {
      nombre: 'Chevrolet blanco 2',
      placa: 'PGT-2318',
      marca: 'Chevrolet',
      modelo: 'NMR EIII',
      color: 'Blanco'
    },
    {
      nombre: 'Hino azul 1',
      placa: 'PZZ-2549',
      marca: 'Hino ',
      modelo: 'Dutro 716',
      color: 'Azul'
    },
    {
      nombre: 'JAC blanco 1',
      placa: 'PCT-8726',
      marca: 'JAC',
      modelo: 'HFC 4180',
      color: 'Blanco'
    },
    {
      nombre: 'Chevrolet azul 1',
      placa: 'PXC-00254',
      marca: 'Chevrolet',
      modelo: 'NLR 511 EIV',
      color: 'Azul'
    },
    {
      nombre: 'Chevrolet blanco 3',
      placa: 'XBG-5644',
      marca: 'Chevrolet',
      modelo: 'NMR EIII',
      color: 'Blanco'
    },
  ];
  vehiculo_selected: any = null;

  collectionSize: number = 0;
  page: number = 1;
  pageSize: any = 5;

  constructor() { }

  ngOnInit(): void {
  }

  agregar() {}

  search_data(){}

  select_vehiculo(data:string){}

  mantenimiento(){}

  combustible(){}

  editar(){}

  eliminar(){}

  refreshTable(){}

  selectPage(page: string) {
    this.page = parseInt(page)
  }

}
