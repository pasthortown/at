import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = environment.api + 'api/auth/user/';
  options: any = {};

  constructor(private http: HttpClient) { }

  build_headers() {
    let headers: HttpHeaders = new HttpHeaders().set('token', sessionStorage.getItem('token') as string)
    this.options = {headers: headers};
  }

  login(email: string, password: string): Promise<any> {
    const data = { email: email, password: password };
    return this.http.post(this.url + 'login', JSON.stringify(data)).toPromise();
  }

  register(user: any): Promise<any> {
    const data = { item: user };
    return this.http.post(this.url + 'register', JSON.stringify(data)).toPromise();
  }

  password_recovery(email: string): Promise<any> {
    return this.http.get(this.url + 'recovery?email=' + email).toPromise();
  }

  upload_users(users: any[]): Promise<any> {
    this.build_headers();
    const data = { items: users };
    return this.http.post(this.url + 'upload_users', JSON.stringify(data), this.options).toPromise();
  }

  get_users(output_model?: any, filter?: any): Promise<any> {
    this.build_headers();
    let data: any = {};
    if ( typeof output_model != 'undefined' ) {
      data.output_model = output_model;
    }
    if ( typeof filter != 'undefined' ) {
      data.filter = filter;
    }
    return this.http.post(this.url + 'get_users', JSON.stringify(data), this.options).toPromise();
  }

  update_user(item_id: string, userdata: any): Promise<any> {
    this.build_headers();
    const data = { item_id: item_id, item: userdata };
    return this.http.put(this.url + 'update_user', JSON.stringify(data), this.options).toPromise();
  }

  delete_user(item_id: string): Promise<any> {
    this.build_headers();
    return this.http.delete(this.url + 'delete_user?item_id=' + item_id, this.options).toPromise();
  }

  lock_user(item_id: string): Promise<any> {
    this.build_headers();
    return this.http.get(this.url + 'lock_user?item_id=' + item_id, this.options).toPromise();
  }

  unlock_user(item_id: string): Promise<any> {
    this.build_headers();
    return this.http.get(this.url + 'unlock_user?item_id=' + item_id, this.options).toPromise();
  }

  reset_password_user(item_id: string): Promise<any> {
    this.build_headers();
    return this.http.get(this.url + 'reset_password_user?item_id=' + item_id, this.options).toPromise();
  }
}
