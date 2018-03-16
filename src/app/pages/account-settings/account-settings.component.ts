import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _ajustes: SettingsService) { }

  ngOnInit() {
    this.colocar_check();
  }

  cambiarColor(thema: string, link: any) {
    this.aplicar_check(link);
    this._ajustes.aplicarTema(thema);
  }

  aplicar_check(link: any ) {
    let selectores: any =  document.getElementsByClassName('selector');
    for (let ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocar_check() {
    let selectores: any =  document.getElementsByClassName('selector');
    let tema = this._ajustes.ajustes.tema;
    for (let ref of selectores) {
      if (ref.getAttribute('data-theme') ===  tema) {
        ref.classList.add('working');
        break;
      }
    }
  }
}
