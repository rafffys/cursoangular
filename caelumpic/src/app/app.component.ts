import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Caelum Pic';
  listaFotos: any;

  constructor(http: HttpClient) {
    http.get('http://localhost:3000/v1/fotos').subscribe(
      fotos => this.listaFotos = fotos
    ,
     erro => window.alert(erro));
  }
}
