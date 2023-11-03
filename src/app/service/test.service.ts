import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  public suma ( x:number, y:number):number {
    return x+y;
  }

  public multiplicacion ( x:number, y:number):number {
    return x*y;
  }
}
