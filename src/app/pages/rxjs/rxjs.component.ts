import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    //  this.returnObservable().pipe(
    //    retry(2)
    //  )

      this.subscription = this.returnObservable()
      .subscribe(
        number => console.log('subs', number) ,
        error => console.error('Error en el observador', error),
        () => console.log('El observable finalizó')

       );

   }

  ngOnInit(): void {

  }

  ngOnDestroy(){
    console.log('Cerranding')
    this.subscription.unsubscribe()
  }

  returnObservable(): Observable<any>{
    return new Observable( (observer: Subscriber<any>) => {

      let counter = 0;

      let inverval = setInterval(()=>{

        counter++

        const exit = {
          value : counter
        };

        observer.next( exit );

        // if (counter === 3) {
        //   clearInterval(inverval)
        //   observer.complete()
        // }

        // if(counter == 2) {
        //   //clearInterval(inverval)
        //   observer.error('Aiuda')
        // }

      },1000);

    } ).pipe(
      map( response => response.value),
      filter( (value, index) => {

        if ((value % 2) === 1) {
          //IMPAR
          return true
        } else {
          //PAR
          return false
        }
      })
    );
  }
}


