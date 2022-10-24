import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  options = {};

  constructor(private http: HttpClient) {

  }

  build_headers() {
    let headers: HttpHeaders = new HttpHeaders().set('token', sessionStorage.getItem('token') as string)
    this.options = {headers: headers};
  }

  upload_items(items: any[], db: string, folder: string): Promise<any> {
    this.build_headers();
    const data = { items: items };
    return this.http.post(environment.api + db + '/' + folder + '/' + 'upload_items', JSON.stringify(data), this.options).toPromise();
  }

  get_items(db: string, folder: string, output_model?: any, filter?: any): Promise<any> {
    this.build_headers();
    let data: any = {};
    if ( typeof output_model != 'undefined' ) {
      data.output_model = output_model;
    }
    if ( typeof filter != 'undefined' ) {
      data.filter = filter;
    }
    return this.http.post(environment.api + db + '/' + folder + '/' + 'get_items', JSON.stringify(data), this.options).toPromise();
  }

  update_item(item_id: string, item: any, db: string, folder: string): Promise<any> {
    this.build_headers();
    const data = { item_id: item_id, item: item };
    return this.http.put(environment.api + db + '/' + folder + '/' + 'update_item', JSON.stringify(data), this.options).toPromise();
  }

  delete_item(item_id: string, db: string, folder: string): Promise<any> {
    this.build_headers();
    return this.http.delete(environment.api + db + '/' + folder + '/' + 'delete_item?item_id=' + item_id, this.options).toPromise();
  }
}
