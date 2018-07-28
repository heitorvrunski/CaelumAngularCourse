import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foto } from '../foto/foto';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FotoService {

    url = 'http://localhost:3000/v1/fotos/';

    constructor(private conexaoApi: HttpClient) {}

    listar(): Observable<Foto[]> {
        return this.conexaoApi.get<Foto[]>(this.url);
    }

    cadastrar(foto: Foto): Observable<Object> {
        return this.conexaoApi.post(this.url, foto);
    }

    deletar(fotoId: String): Observable<Object> {
        return this.conexaoApi.delete(this.url + fotoId);
    }

    buscar(fotoId: String): Observable<Foto> {
        return this.conexaoApi.get<Foto>(this.url + fotoId);
    }
    atualizar(foto: Foto): Observable<Object> {
        return this.conexaoApi.put<Foto>(this.url + foto._id, foto);
    }


}
