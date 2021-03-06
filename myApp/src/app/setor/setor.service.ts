import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class SetorService {

  headers: any = new Headers({ 'Content-Type': 'application/json' });
  options: any = new RequestOptions({ headers: this.headers });  

  constructor(private http: Http) { }

  getSetor() {
      return this.http.get('/listSetor')
                      .map(response => response.json())
  }

  getSetorId(data) {

      return this.http.post('/byIdSetor', { id: data }, this.options)
                      .map(response => response.json())    
  } 

  saveSetor(data) {

    return this.http.post('/saveSetor', data, this.options)
                    .map(response => response.json())
  }

  updateSetor(data) {

    return this.http.post('/updateSetor', data, this.options)
                    .map(response => response.json())
  }

  delSetor(data) {

    return this.http.post('/deleteSetor', data, this.options)
                    .map(response => response.json())
  }     

}
