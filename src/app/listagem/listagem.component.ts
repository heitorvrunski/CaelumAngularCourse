import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { FotoService } from '../services/foto.service';
import { Foto } from '../foto/foto';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  title = 'Caelum Pic';
  fotos: Foto[] = [];
  constructor(private fotoService: FotoService) {
  }

  ngOnInit() {
    this.fotoService.listar().subscribe((fotos) => {
      this.fotos = fotos;
    });
  }
  delete(foto) {
    this.fotoService.deletar(foto._id).subscribe(() => {
      this.fotos = Array.from(this.fotos).filter((fotoLoop) => {
        if (fotoLoop !== foto) {
          return fotoLoop;
        }
      });
    });
  }
}
