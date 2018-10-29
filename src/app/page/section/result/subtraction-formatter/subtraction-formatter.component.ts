import { Component, OnInit, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { SubtractionResult } from '../../../../_models';

@Component({
  selector: 'app-subtraction-formatter',
  templateUrl: './subtraction-formatter.component.html',
  styleUrls: ['./subtraction-formatter.component.css']
})
export class SubtractionFormatterComponent implements OnChanges {
  @Input() subtaractionResult: SubtractionResult;
  firstTerm: string[];
  secondTerm: string[];
  difference: string[];
  stub: string[];
  constructor() { }

  ngOnChanges() {
    if (this.subtaractionResult.isEmpty()) { return; }
    const m = Math.max(
      this.subtaractionResult.firstTerm.length,
      this.subtaractionResult.secondTerm.length);
    const f = m - this.subtaractionResult.firstTerm.length;
    const s = m - this.subtaractionResult.secondTerm.length;
    let z = this.subtaractionResult.difference.length - m - 1;
    let r = 0;
    if (z < 0) {
      r = -z;
      z = 0;
    }
    this.stub = Array.from(this.assemblyString(z, ' '));
    this.firstTerm = Array.from(this.assemblyString(f, ' ').concat(this.subtaractionResult.firstTerm));
    this.secondTerm = Array.from(this.assemblyString(s, ' ').concat(this.subtaractionResult.secondTerm));
    this.difference = Array.from(this.assemblyString(r, ' ').concat(this.subtaractionResult.difference));
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
