import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flota-page',
  templateUrl: './flota-page.component.html',
  styleUrls: ['./flota-page.component.scss']
})
export class FlotaPageComponent implements OnInit {

  db: string = 'flota';
  folder: string = 'vehiculos';

  vehiculo_definition = {
    item_id: 'text',
    nombre: 'text',
    plate: 'text',
    brand: 'text',
    model: 'text',
    color: 'text',
    picture_front: 'picture',
    picture_side: 'picture',
    picture_back: 'picture'
  };

  translations = {
    nombre: 'Nombre',
    plate: 'Placa',
    brand: 'Marca',
    model: 'Modelo',
    color: 'Color',
    picture_front: 'Fotografía Frontal',
    picture_side: 'Fotografía Lateral',
    picture_back: 'Fotografía Posterior'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
