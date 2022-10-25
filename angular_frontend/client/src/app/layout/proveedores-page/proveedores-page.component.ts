import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-proveedores-page',
  templateUrl: './proveedores-page.component.html',
  styleUrls: ['./proveedores-page.component.scss']
})
export class ProveedoresPageComponent implements OnInit {

  db: string = 'flota';
  folder: string = 'proveedores';

  proveedor_definition = {
    item_id: 'text',
    categoria: 'text',
    nombre: 'text',
    RUC: 'text',
    descripcion: 'text',
    contacto_phone: 'phone',
    contacto_mail: 'email'
  };

  translations = {
    categoria: 'Categoría',
    nombre: 'Nombre Proveedor',
    RUC: 'Registro Único de Contribuyente',
    descripcion: 'Descripción',
    contacto_phone: 'Número Telefónico',
    contacto_mail: 'Correo Electrónico'
  }

  constructor() { }

  ngOnInit(): void {
  }
}
