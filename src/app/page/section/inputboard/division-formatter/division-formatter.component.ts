import { Step } from '../../../../_models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './division-formatter.component.html',
  styleUrls: ['./division-formatter.component.css']
})
export class DivisionFormatterComponent implements OnInit {
  @Input() dividend: string;
  @Input() divisor: string;
  @Input() quotient: string;
  @Input() remainder: string;
  @Input() steps: Step[];

  constructor() {}

  ngOnInit() {
    let j = 0;
    let diff = 0;
    let i = 0;
    for (let step: Step in this.steps) {
      i++;
      
    }
  }
}
