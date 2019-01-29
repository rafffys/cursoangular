import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    templateUrl: './listagem.component.html',
    selector: 'app-listagem'
})
export class ListagemComponent {
    title = 'CaelumPic';
    listaFotos: Object;
    constructor(http: HttpClient) {
        http.get('http://localhost:3000/v1/fotos').subscribe(
            fotos => this.listaFotos = fotos
          ,
           erro => window.alert('Erro ao acessar os dados!'));
    }
}
