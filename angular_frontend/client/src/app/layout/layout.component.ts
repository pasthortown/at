import { NgxSpinnerService } from 'ngx-spinner';
import { CatalogService } from 'src/app/services/catalog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user: any = {};
  side_menu: any[] = [];

  constructor(private catalogDataService: CatalogService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user') as string);
    this.build_menu();
  }

  build_menu() {
    this.side_menu = [];
    this.spinner.show();
    this.catalogDataService.get_items('config', 'side-menu').then( r => {
      this.spinner.hide();
      this.side_menu = r[0].side_menu;
    }).catch( e => { console.log(e); });
  }

}
