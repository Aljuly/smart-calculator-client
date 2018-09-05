import { Component, Input, OnChanges } from '@angular/core';
import { MultiplicationResult } from '../../../../_models';

@Component({
  selector: 'app-multiplycation-formatter',
  templateUrl: './multiplycation-formatter.component.html',
  styleUrls: ['./multiplycation-formatter.component.css']
})
export class MultiplycationFormatterComponent implements OnChanges {
  @Input() multiplicationResult: MultiplicationResult;
  firstFactor: string[];
  secondFactor: string[];
  product: string[];
  stub: string[];
  stepsOut: any[];

  constructor() { }

  ngOnChanges() {
    if (this.multiplicationResult.isEmpty()) { return; }
    this.stepsOut = new Array();
    const m = (this.multiplicationResult.product.length + 1) -
        Math.max(this.multiplicationResult.firstFactor.length,
          this.multiplicationResult.secondFactor.length);
    const f = (this.multiplicationResult.product.length - this.multiplicationResult.firstFactor.length) - 1;
    const s = (this.multiplicationResult.product.length - this.multiplicationResult.secondFactor.length);
    this.firstFactor = Array.from(this.assemblyString(f, ' ').concat(this.multiplicationResult.firstFactor));
    this.secondFactor = Array.from(this.assemblyString(s, ' ').concat(this.multiplicationResult.secondFactor));
    this.stub = Array.from(this.assemblyString(m, ' '));
    this.product = Array.from(this.multiplicationResult.product);
    for (let k = 0; k < this.multiplicationResult.steps.length; k++) {
      if (this.multiplicationResult.steps[k] !== '0') {
        this.stepsOut.push(Array.from(this.assemblyString(k, ' ').concat(this.multiplicationResult.steps[k],
          this.assemblyString(this.multiplicationResult.product.length - (this.multiplicationResult.steps[k].length + 1), ' '))));
      }
    }
  }
  // Utility function that forms string from given char of given length
  private assemblyString(numberOfSymbols: number, symbol: string) {
    if (numberOfSymbols === 0) { return ''; }
    return new Array(numberOfSymbols).join(symbol);
  }
}
