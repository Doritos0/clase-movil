import { Component } from '@angular/core';
import { TestService } from '../service/test.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public msj : string = "";

  datos={
    nro1: null,
    nro2: null
  }

  constructor(private service: TestService) {}

  doSumar(){
    this.msj ="La suma es: "+

      this.service.suma(
        Number(this.datos.nro1),
        Number(this.datos.nro2)
      );
    return this.msj;
  }
}
