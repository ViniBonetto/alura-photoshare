import { environment } from './../../environments/environment.prod';
import { TokenService } from './../autenticacao/token.service';
import { Postagens } from './postagem';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient,
              private tokenService: TokenService) { }

  listaDoUsuario(nomeDoUsuario: string): Observable<Postagens>{
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.http.get<Postagens>(`${API}/${nomeDoUsuario}/photos`, {
      headers,
    });
  }
}


