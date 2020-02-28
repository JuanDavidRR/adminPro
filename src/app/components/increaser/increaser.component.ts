import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, } from '@angular/core';

@Component({
  selector: 'app-increaser',
  templateUrl: './increaser.component.html',
  styles: []
})
export class IncreaserComponent implements OnInit {

  @ViewChild('progressBar') progressBar: ElementRef;

  @Input() progress = 50;
  @Input() percentage = 5;
  @Input() legend: string = "Ejemplo leyenda"

  @Output() changeValue: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange( newValue: number) {

    //let HTMLelement: any = document.getElementsByName('progress')[0];
    // console.log( this.progressBar );

    if(newValue >= 100){
      this.progress = 100;
    } else if (newValue <= 0){
      this.progress = 0;
    } else {
      this.progress = newValue
    }

    // HTMLelement.value = ( this.progress )
    this.progressBar.nativeElement.value = this.progress

    this.changeValue.emit(this.progress);

  }

  //FUNCTIONS

  //INCREASE THE VALUE
  increase(value: number){
    if(this.progress >=100 || value  >100) {
      this.progress = 100;
      return
    }
    this.progress = this.progress + value;
    this.changeValue.emit( this.progress )
  }
  //DECREASE DEL VALUE
  decrease(value: number){
    if(this.progress <=0 || value <0) {
      this.progress = 0;
      return
    }
    this.progress = this.progress - value;
    this.changeValue.emit( this.progress )
  }

}
