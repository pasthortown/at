import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operadores-page',
  templateUrl: './operadores-page.component.html',
  styleUrls: ['./operadores-page.component.scss']
})
export class OperadoresPageComponent implements OnInit {

  db: string = 'flota';
  folder: string = 'operadores';

  operador_definition = {
    item_id: 'text',
    document_id: 'text',
    lastname: 'text',
    firstname: 'text',
    driver_document_date: 'date',
    driver_document: 'picture',
  };

  translations = {
    document_id: 'Categoría',
    lastname: 'Apellidos',
    firstname: 'Nombres',
    driver_document_date: 'Fecha de Expiración de Licencia',
    driver_document: 'Licencia'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
