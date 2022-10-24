import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operadores-page',
  templateUrl: './operadores-page.component.html',
  styleUrls: ['./operadores-page.component.scss']
})
export class OperadoresPageComponent implements OnInit {

  filter: string = '';
  operadores: any[] = [
    {
      CI: '1725698425',
      nombre: 'Ricardo',
      apellidos: 'Cedeño Martinez',
      licencia_numero: 'dummyLicencia',
      fecha_caducidad: '25-06-2026'
    },
    {
      CI: '1720894218',
      nombre: 'Daniel',
      apellidos: 'Salas Martínez',
      licencia_numero: 'dummyLicencia',
      fecha_caducidad: '30-04-2025'
    },
    {
      CI: '1756249825',
      nombre: 'Santiago',
      apellidos: 'Pérez Mejía',
      licencia_numero: 'dummyLicencia',
      fecha_caducidad: '23-11-2026'
    },
    {
      CI: '1740847635',
      nombre: 'Fernando',
      apellidos: 'Jarrín Jasán',
      licencia_numero: 'dummyLicencia',
      fecha_caducidad: '14-01-2027'
    },
  ];
  operador_selected: any = null;

  collectionSize: number = 0;
  page: number = 1;
  pageSize: any = 5;
  constructor() { }

  ngOnInit(): void {
  }

  agregar() {}

  search_data(){}

  select_operador(data:string){}

  editar(){}

  eliminar(){}

  refreshTable(){}

  selectPage(page: string) {
    this.page = parseInt(page)
  }

}
