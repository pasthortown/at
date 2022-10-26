import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo-servicios-page',
  templateUrl: './catalogo-servicios-page.component.html',
  styleUrls: ['./catalogo-servicios-page.component.scss']
})
export class CatalogoServiciosPageComponent implements OnInit {

  db: string = 'flota';
  folder: string = 'servicios';

  service_definition = {
    item_id: 'text',
    nombre: 'text',
    provider: 'text',
    description: 'text',
    price: 'money',
    document: 'file'
  };

  translations = {
    nombre: 'Nombre',
    provider: 'Proveedor',
    description: 'Descripción',
    price: 'Costo',
    document: 'Documento Adjunto'
  }

  constructor() { }

  ngOnInit(): void {
  }
}
