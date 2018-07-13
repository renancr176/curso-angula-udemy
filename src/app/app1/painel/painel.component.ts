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
  public index: number;
  public resposta: string = '';
  public quantidadeFrases: number;
  public quantidadeAcertos: number = 0;

  constructor() { 
    this.quantidadeFrases = this.frases.length;
    this.OutraFrase();
  }

  ngOnInit() {
  }
  
  OutraFrase(): void{
    if(this.frases.length > 0){
      this.index = this.IndiceRandomicoFrases();
      this.frase = this.frases[this.index];
    }else{
      this.index = -1;
    }
  }

  IndiceRandomicoFrases(): number {
    let keys: Array<any> = Object.keys(this.frases);
    return keys[Math.floor(Math.random() * this.frases.length)]
  }

  Resposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement> resposta.target).value;
  }

  JogoAtivo(): boolean{
    return (this.frases.length > 0 && this.numeroTentativas > 0);
  }

  Verificar(): void{
    if(this.numeroTentativas > 0 && this.resposta.length > 0){
      if(this.frase.frasePtBr.toLowerCase() == this.resposta.toLowerCase()){
        this.quantidadeAcertos++;
        this.porcentagemAcertos = (this.quantidadeAcertos / this.quantidadeFrases) * 100;

        this.frases.splice(this.index, 1);
        this.OutraFrase();
        this.resposta = '';
        alert('Acertou');
      }else{
        this.numeroTentativas--;
        alert('Errou!!!');
      }
    }else{
      alert('Informe a resposta.');
    }
  }

  Reiniciar(): void{
    this.numeroTentativas = 3;
    this.porcentagemAcertos = 0;
    this.frases = Frases;
    this.quantidadeFrases = this.frases.length;
    this.OutraFrase();
    
    console.log(this.frases);
  }
}
