import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class SetorService {

  constructor(private http: Http) { }

    getSetor() {
      return this.http.get('/listSetor')
                      .map(response => response.json())
    }

}
