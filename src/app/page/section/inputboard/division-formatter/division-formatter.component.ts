import { Step } from '../../../../_models';
import { Component } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './division-formatter.component.html',
  styleUrls: ['./division-formatter.component.css']
})
export class DivisionFormatterComponent {
  dividend: string;
  divisor: string;
  quotient: string;
  remainder: string;
  steps: Step[];
}
