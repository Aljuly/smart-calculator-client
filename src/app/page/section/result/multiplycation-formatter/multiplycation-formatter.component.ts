import { Component, Input, OnChanges } from '@angular/core';
import { MultiplicationResult } from '../../../../_models';

@Component({
  selector: 'app-multiplycation-formatter',
  templateUrl: './multiplycation-formatter.component.html',
  styleUrls: ['./multiplycation-formatter.component.css']
})
export class MultiplycationFormatterComponent implements OnChanges {
  @Input() multiplycationResult: MultiplicationResult;
  firstFactor: string;
  secondFactor: string;
  product: string;
  stub = '';
  stepsOut: string[];

  constructor() { }

  ngOnChanges() {
    const m = (this.multiplycationResult.product.length + 1) -
        Math.max(this.multiplycationResult.firstFactor.length,
          this.multiplycationResult.secondFactor.length);
    const f = (this.multiplycationResult.product.length - this.multiplycationResult.firstFactor.length) - 1 - m;
    const s = (this.multiplycationResult.product.length - this.multiplycationResult.secondFactor.length) - 1 - m;
    this.firstFactor = this.assemblyString(f, ' ').concat(this.multiplycationResult.firstFactor);
    this.secondFactor = this.assemblyString(s, ' ').concat(this.multiplycationResult.secondFactor);
    this.stub = this.assemblyString(m, ' ');
    for (let k = 0; k < this.multiplycationResult.steps.length - 1; k++) {
      if (this.multiplycationResult.steps[k] !== '0') {
        this.stepsOut.push(this.assemblyString(k, ' ').concat(this.multiplycationResult.steps[k],
          this.assemblyString(this.multiplycationResult.product.length - (this.multiplycationResult.steps[k].length + 1), ' ')));
      }
    }
  }
  // Utility function that forms string from given char of given length
  private assemblyString(numberOfSymbols: number, symbol: string) {
    if (numberOfSymbols === 0) { return ''; }
    return new Array(numberOfSymbols).join(symbol);
  }
}
