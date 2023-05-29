import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
escolha = 'celular'
  constructor() { }

  ngOnInit() {
  }
  alterar(evento: any){
    this.escolha = evento.detail.value;
  }
}
