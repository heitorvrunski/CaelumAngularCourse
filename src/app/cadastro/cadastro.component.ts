import { Component, OnInit } from '@angular/core';
import { Foto, IFoto } from '../foto/foto';
import { HttpClient } from '@angular/common/http';
import { FotoService } from '../services/foto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Mensagem } from '../mensagem/mensagem';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  foto = new Foto();
  mensagem = new Mensagem();
  btnName = 'Salvar';
  formCadastro: FormGroup;

  constructor(private fotoService: FotoService
              , private rotaAtivada: ActivatedRoute
              , private route: Router
              , private formBuilder: FormBuilder)  {
   }

   ngOnInit() {
      this.formCadastro = this.formBuilder.group({
        titulo: ['', Validators.compose(
          [
            Validators.required,
            Validators.minLength(5)
          ]
      )],
        url: ['', Validators.required],
        descricao: ''
      });
     const fotoId = this.rotaAtivada.snapshot.params.fotoId;
     if (fotoId) {
        this.btnName = 'Atualizar';
        this.fotoService.buscar(fotoId).subscribe((foto) => {
          this.foto = foto;
          this.formCadastro.patchValue(this.foto);
        });
    }
   }

  salvar(formCadastro: NgForm) {

     this.foto = {...this.foto, ...this.formCadastro.value};

    if (this.foto._id) {
      this.fotoService.atualizar(this.foto).subscribe((res) => this.route.navigate(['']),
      (erro) => console.log(erro));
    } else {
    this.fotoService.cadastrar(this.foto).subscribe(() => {
      },
      (erro) => {
        this.mensagem.tipo = 'danger';
        this.mensagem.texto = 'erro ao cadastrar !';
        this.mensagem.show = true;
      },
      () => {
        this.mensagem.tipo = 'success';
        this.mensagem.texto = 'cadastrado com successo !';
        this.mensagem.show = true;
        setTimeout(() => {
          this.mensagem.show = false;
          formCadastro.reset();
        }, 2000);
      });
    }
}
}
