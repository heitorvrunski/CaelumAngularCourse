import { Component, OnInit } from '@angular/core';
import { Foto, IFoto } from '../foto/foto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  foto = new Foto();
  constructor(private http: HttpClient)  {
   }


  salvar() {
    this.http.post(
      'http://localhost:3000/v1/fotos',
      this.foto
    ).subscribe((res) => console.log(res),
      (erro) => console.log(erro));
}
}
