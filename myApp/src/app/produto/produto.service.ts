import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class ProdutoService {

  headers: any = new Headers({ 'Content-Type': 'application/json' });
  options: any = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getProduto() {
      return this.http.get('/listProduto')
                      .map(response => response.json())
  }

  getProdutoId(data) {

      return this.http.post('/byIdProduto', { id: data }, this.options)
                      .map(response => response.json())    
  } 

  saveProduto(data) {

    return this.http.post('/saveProduto', data, this.options)
                    .map(response => response.json())
  }

  updateProduto(data) {

    return this.http.post('/updateProduto', data, this.options)
                    .map(response => response.json())
  }

  delProduto(data) {

    return this.http.post('/deleteProduto', data, this.options)
                    .map(response => response.json())
  } 

}
