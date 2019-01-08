import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getJson() {
    return this.http.get('./assets/data.json').pipe(map(res => res['data'] as any));

  }
}
