import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progress: number = 20;
  progressTwo: number = 60;

  constructor() { }

  ngOnInit(): void {
  }

}
