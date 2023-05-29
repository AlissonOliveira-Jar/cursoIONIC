import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Botão', url: '/botao', icon: 'radio-button-on' },
    { title: 'Lista', url: '/lista', icon: 'list' },
    { title: 'Alerts', url: '/alertas', icon: 'alert-circle' },
    { title: 'Infinite', url: '/infinite', icon: 'infinite' },
    { title: 'Refresher', url: '/refresher', icon: 'reload-circle' },
    { title: 'Contatos', url: '/contato', icon: 'person' },
    { title: 'Sliding', url: '/sliding', icon: 'albums' },
    { title: 'Segment', url: '/segment', icon: 'git-network' },
    { title: 'Slide', url: '/slide', icon: 'image' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
