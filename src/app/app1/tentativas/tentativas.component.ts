import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Coracao } from '../models/coracoe.model'

@Component({
  selector: 'app-app1-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {
  @Input() public numeroTentativas: number = 3;
  public quantidadeCoracoes: number;
  public coracoes: Array<Coracao> = new Array<Coracao>();

  constructor() {
    this.quantidadeCoracoes = this.numeroTentativas;
    for(let i = 0; i < this.quantidadeCoracoes; i++){
      this.coracoes.push(new Coracao(true));
    }
  }

  ngOnInit() {
  }

  ngOnChanges(){
    for(let i = (this.quantidadeCoracoes - 1); i > -1; i--){
      if(this.numeroTentativas < (i + 1)){
        this.coracoes[i].cheio = false;
      }else{
        this.coracoes[i].cheio = true;
      }
    }
  }

  estadoCoracao(numeroCoracao: number): string{
    let Cheio = 'fas fa-heart fa-3x text-danger';
    let Vazio = 'far fa-heart fa-3x text-danger';
    let Estado = '';
    if(this.numeroTentativas < numeroCoracao){
      Estado = Vazio;
    }else{
      Estado = Cheio;
    }
    return Estado;
  }

}
