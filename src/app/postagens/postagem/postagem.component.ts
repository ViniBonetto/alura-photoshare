import { environment } from './../../../environments/environment.prod';
import { Component, Input, OnInit } from '@angular/core';

const API = environment.apiURL;

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css']
})
export class PostagemComponent implements OnInit {

  private urlOriginal: string = '';

  @Input() descricao = '';

  @Input() set url(url: string) {
    if(url.startsWith('data')){
      this.urlOriginal = url;
    }else {
      this.urlOriginal = `${API}/imgs/${url}`;
    }
  }

  get url(): string {
    return this.urlOriginal;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
