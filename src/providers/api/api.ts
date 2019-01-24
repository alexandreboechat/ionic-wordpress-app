import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  // URL default para a chamada do JSON no Wordpress 'wp-json'
  private API_URL:string = 'http://www.jornalbrasilnovo.com.br/wp-json/wp/v2/';
  public Categorias:any = [];

  constructor(public http: HttpClient) {
  }

  get(query:string = ''){
    return this.http.get(this.API_URL + query)
  }

  getCategorias(){
    this.get('categories').subscribe((data) => {
      this.Categorias = data;
    });
  }
  

}
