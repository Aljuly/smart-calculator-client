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
  stub: string;
  constructor() { }

  ngOnChanges() {
    if (this.additionResult.isEmpty()) { return; }
    const m = (this.additionResult.sum.length + 1) - Math.max(this.additionResult.firstTerm.length,
      this.additionResult.secondTerm.length);
    const f = (this.additionResult.sum.length - this.additionResult.firstTerm.length) + 1 - m;
    const s = (this.additionResult.sum.length - this.additionResult.secondTerm.length) + 1 - m;
    this.firstTerm = Array.from(this.assemblyString(f, ' ').concat(this.additionResult.firstTerm));
    this.secondTerm = Array.from(this.assemblyString(s, ' ').concat(this.additionResult.secondTerm));
    this.stub = this.assemblyString(m, ' ');
    this.sum = Array.from(this.stub.concat(this.additionResult.sum));
  }
  // Utility function that forms string from given char of given length
  private assemblyString(numberOfSymbols: number, symbol: string) {
    if (numberOfSymbols === 0) { return ''; }
    return new Array(numberOfSymbols).join(symbol);
  }
}
