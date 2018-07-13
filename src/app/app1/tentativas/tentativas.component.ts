import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app1-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {
  @Input() public numeroTentativas: number = 3;

  constructor() { }

  ngOnInit() {
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
