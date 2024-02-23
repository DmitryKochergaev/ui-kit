import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  constructor() { }

  public testMethod(): string {
    return  'test string';
  }
}
