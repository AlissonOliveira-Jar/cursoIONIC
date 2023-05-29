import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
personas = [
  {
    nome : "Bill Gates",
    url : "/assets/Bill Gates.jpeg",
    estrelas : 5
  },
  {
    nome : "Steve Jobs",
    url : "/assets/Steve Jobs.png",
    estrelas : 5
  },
  {
    nome : "James Gosling",
    url : "/assets/James Gosling.jpg",
    estrelas : 5
  },
  {
    nome : "Grace Hopper",
    url : "/assets/Grace Hopper.jpg",
    estrelas : 5
  },
  {
    nome : "Ada Lovelace",
    url : "/assets/Ada Lovelace.jpg",
    estrelas : 5
  },
  {
    nome : "Larry Page",
    url : "/assets/Larry Page.jpg",
    estrelas : 5
  },
  {
    nome : "Alan Turing",
    url : "/assets/Alan Turing.jpg",
    estrelas : 5
  },
  {
    nome : "Mark Zuckberg",
    url : "/assets/Mark Zuckberg.png",
    estrelas : 5
  },
]
  constructor() { }

  ngOnInit() {
  }
}
