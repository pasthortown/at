import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mantenimientos-page',
  templateUrl: './mantenimientos-page.component.html',
  styleUrls: ['./mantenimientos-page.component.scss']
})
export class MantenimientosPageComponent implements OnInit {


  db: string = 'flota';
  folder: string = 'mantenimientos';

  mantenimiento_definition = {
    item_id: 'text',
    status: 'text',
    nombre: 'text',
    vehicle: 'text',
    plate: 'text',
    service_provided: 'text',
    date: 'date',
    price: 'money',
    document: 'file'
  };

  translations = {
    status: 'Estado',
    nombre: 'Nombre',
    vehicle: 'Vehículo Afectado',
    plate: 'Placa',
    service_provided: 'Servicio Provisto',
    date: 'Fecha',
    price: 'Costo',
    document: 'Documento Adjunto'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
