import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { AdditionResult } from '../../../../_models';

@Component({
  selector: 'app-addition-component',
  templateUrl: './addition-component.component.html',
  styleUrls: ['./addition-component.component.css']
})
export class AdditionComponent implements OnChanges {
  @Input() additionResult: AdditionResult;
  firstTerm: string[];
  secondTerm: string[];
  sum: string[];
  stub: string[];
  constructor() { }

  ngOnChanges() {
    if (this.additionResult.isEmpty()) { return; }
    const m = Math.max(
      this.additionResult.firstTerm.length + 1,
      this.additionResult.secondTerm.length + 1,
      this.additionResult.sum.length);
    let z = Math.max(
      this.additionResult.firstTerm.length,
      this.additionResult.secondTerm.length) - this.additionResult.sum.length;
    if (z < 0) { z = 0; }
    const f = m - this.additionResult.firstTerm.length - z;
    const s = m - this.additionResult.secondTerm.length - z;
    const r = m - this.additionResult.sum.length - z + 1;
    this.firstTerm = Array.from(this.assemblyString(f, ' ').concat(this.additionResult.firstTerm));
    this.secondTerm = Array.from(this.assemblyString(s, ' ').concat(this.additionResult.secondTerm));
    this.stub = Array.from(this.assemblyString(z, ' '));
    this.sum = Array.from(this.assemblyString(r, ' ').concat(this.additionResult.sum));
  }
  // Utility function that forms string from given char of given length
  private assemblyString(numberOfSymbols: number, symbol: string) {
    if (numberOfSymbols === 0) { return ''; }
    let result = '';
    for (let i = 0; i < numberOfSymbols; i++) {
        result += symbol;
    }
    return result;
  }
}
