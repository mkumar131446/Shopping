import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetSetService {
  private data: any;

  constructor() { }

  set(value) {
    this.data = value;
  }

  get() {
    return this.data;
  }
}