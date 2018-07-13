import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app1-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {
  @Input() public porcentagem: number = 0;

  constructor() { }

  ngOnInit() {
  }
}
