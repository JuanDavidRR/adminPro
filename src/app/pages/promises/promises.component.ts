import { Component, OnInit } from '@angular/core';
import { resolve } from 'dns';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {
    console.log('jueputa')


      this.countThree().then(
        () => console.log("Finished")
      )
      .catch( error => console.error("Error en promesa", error) )

   }

  ngOnInit(): void {
  }

  countThree() {
    let promise = new Promise( (resolve, reject) => {

      let counter = 0;

      let interval = setInterval( () => {

        counter+=1
        console.log(counter)

        if (counter === 3) {
          resolve(true);
          clearInterval(interval)
        }

      }, 1000);

    });
    return promise
  }

}
