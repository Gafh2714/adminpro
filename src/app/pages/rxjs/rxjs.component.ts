import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
   /* this.regresaObservable().retry(2)
      .subscribe(
      numero => { console.log('subs', numero); },
      error => { console.error('error en el obs', error); },
      () => { console.log('El observador termino'); }
    );*/

    this.subscription = this.regresaObservable()
      .subscribe(
      numero => { console.log('subs', numero); },
      error => { console.error('error en el obs', error); },
      () => { console.log('El observador termino'); }
    );

   }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('Pagina cerrando');
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable(observer => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        let salida = {
          valor: contador
        };
        observer.next(salida);
        // Comento para hacerlo infinito
        /*if ( contador === 3 ) {
          clearInterval(intervalo);
          observer.complete();
        }*/
        /*if ( contador === 2 ) {
          observer.error('Se daño');
        }*/
      }, 500 );
    })
    .retry(2)
    .map((res: any) => {
      return res.valor;
     })
    .filter( (valor, index) => {
      if(valor % 2 === 1) {
        return true;
      } else {
        return false;
      }
     });
  }

}
