import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.cargar_ajustes();
  }

  guardar_ajustes() {
    localStorage.setItem('Ajustes', JSON.stringify(this.ajustes));
  }

  cargar_ajustes() {
    if (localStorage.getItem('Ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('Ajustes'));
    }
    this.aplicarTema(this.ajustes.tema);
  }

  aplicarTema(thema: string) {
    let url = `assets/css/colors/${ thema }.css`;
    this._document.getElementById('th-tema').setAttribute('href', url);
    this.ajustes.tema = thema;
    this.ajustes.temaUrl = url;
    this.guardar_ajustes();
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
