import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contarTres().then((res) => { console.log('Termino', res); } ).catch(error => { console.log('error'); });
   }

  ngOnInit() {

  }

  contarTres(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let contador = 0;
      let invtervalo = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador ===  3) {
          clearInterval(invtervalo);
          resolve(true);
        }
      }, 1000 );
    });
  }
}
