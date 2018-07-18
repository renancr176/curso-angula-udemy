import { Component, OnInit } from '@angular/core';

import { Frase } from '../models/frase.model';
import { Frases } from '../frases-mock';

@Component({
  selector: 'app-app1-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public porcentagemAcertos: number = 0;
  public numeroTentativas: number = 3;
  public frases: Array<Frase> = Frases;
  public frase: Frase;
  public frasesIndexes: Array<any>;
  public index: number;
  public resposta: string = '';
  public quantidadeFrases: number;
  public quantidadeAcertos: number = 0;

  constructor() { 
    this.frasesIndexes = Object.keys(this.frases);
    this.quantidadeFrases = this.frases.length;
    this.OutraFrase();
  }

  ngOnInit() {
  }
  
  OutraFrase(): void{
    if(this.frasesIndexes.length > 0){
      this.index = this.IndiceRandomicoFrases();
      this.frasesIndexes.splice(this.frasesIndexes.indexOf(this.index), 1);
      this.frase = this.frases[this.index];
    }else{
      this.index = -1;
    }
  }

  IndiceRandomicoFrases(): number {
    return this.frasesIndexes[Math.floor(Math.random() * this.frasesIndexes.length)]
  }

  Resposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement> resposta.target).value;
  }

  JogoAtivo(): boolean{
    return (this.index > -1 && this.numeroTentativas > 0);
  }

  Verificar(): void{
    if(this.index > -1 && this.resposta.length > 0){
      if(this.frase.frasePtBr.toLowerCase() == this.resposta.toLowerCase()){
        this.quantidadeAcertos++;
        this.porcentagemAcertos = (this.quantidadeAcertos / this.quantidadeFrases) * 100;

        this.OutraFrase();
        alert('Acertou');
      }else{
        this.numeroTentativas--;
        alert('Errou!!!');
      }
      this.resposta = '';
    }else{
      alert('Informe a resposta.');
    }
  }

  Reiniciar(): void{
    this.numeroTentativas = 3;
    this.quantidadeAcertos = 0;
    this.porcentagemAcertos = 0;
    this.frasesIndexes = Object.keys(this.frases);
    this.OutraFrase();
  }
}
