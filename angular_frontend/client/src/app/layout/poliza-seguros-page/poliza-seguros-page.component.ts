import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poliza-seguros-page',
  templateUrl: './poliza-seguros-page.component.html',
  styleUrls: ['./poliza-seguros-page.component.scss']
})
export class PolizaSegurosPageComponent implements OnInit {

  db: string = 'flota';
  folder: string = 'polizas';

  poliza_definition = {
    item_id: 'text',
    nombre: 'text',
    description: 'text',
    price: 'money',
    document: 'file',
  };

  translations = {
    nombre: 'Nombre',
    description: 'Descripción de Cobertura',
    price: 'Costo',
    document: 'Documento Adjunto'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
