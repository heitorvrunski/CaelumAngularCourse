import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  title = 'Caelum Pic';
  fotos: any;
  constructor(http: HttpClient) {
    http.get('http://localhost:3000/v1/fotos').subscribe((fotos) => {
      this.fotos = fotos;
    });
  }

  ngOnInit() {
  }

}
