import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogDMZService {

  constructor(private http: HttpClient) {

  }

  upload_items(items: any[], folder: string): Promise<any> {
    const data = { items: items };
    return this.http.post(environment.api + folder + '/' + 'upload_items', JSON.stringify(data)).toPromise();
  }

  get_items(db: string, folder: string, output_model?: any, filter?: any): Promise<any> {
    let data: any = {};
    if ( typeof output_model != 'undefined' ) {
      data.output_model = output_model;
    }
    if ( typeof filter != 'undefined' ) {
      data.filter = filter;
    }
    return this.http.post(environment.api + folder + '/' + 'get_items', JSON.stringify(data)).toPromise();
  }

  update_item(item_id: string, item: any, folder: string): Promise<any> {
    const data = { item_id: item_id, item: item };
    return this.http.put(environment.api + folder + '/' + 'update_item', JSON.stringify(data)).toPromise();
  }

  delete_item(item_id: string, folder: string): Promise<any> {
    return this.http.delete(environment.api + folder + '/' + 'delete_item?item_id=' + item_id).toPromise();
  }
}
