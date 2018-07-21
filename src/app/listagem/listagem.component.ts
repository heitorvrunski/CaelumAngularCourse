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
  constructor(private http: HttpClient) {
    http.get('http://localhost:3000/v1/fotos').subscribe((fotos) => {
      this.fotos = fotos;
    });
  }

  ngOnInit() {
  }
  delete(foto) {
    this.http.delete('http://localhost:3000/v1/fotos/' + foto._id).subscribe(() => {
      this.fotos = Array.from(this.fotos).filter((fotoLoop) => {
        if (fotoLoop !== foto) {
          return fotoLoop;
        }
      });
    });
  }
}
