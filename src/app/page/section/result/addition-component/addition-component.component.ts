import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-addition-component',
  templateUrl: './addition-component.component.html',
  styleUrls: ['./addition-component.component.css']
})
export class AdditionComponent implements OnInit {
  @Input() firstTerm: string;
  @Input() secondTerm: string;
  @Input() sum: string;
  @Input() operationType: number;
  addition: boolean;
  subtraction: boolean;
  stub: string;
  constructor() { }

  ngOnInit() {
    if (this.operationType === 1) { this.addition = true; }
    if (this.operationType === 2) { this.subtraction = true; }
    const m = (this.sum.length + 1) - Math.max(this.firstTerm.length, this.secondTerm.length);
    const f = (this.sum.length - this.firstTerm.length) - 1 - m;
    const s = (this.sum.length - this.secondTerm.length) - 1 - m;
    this.firstTerm = this.assemblyString(f, ' ').concat(this.firstTerm);
    this.secondTerm = this.assemblyString(s, ' ').concat(this.secondTerm);
    this.stub = this.assemblyString(m, ' ');
  }
  // Utility function that forms string from given char of given length
  private assemblyString(numberOfSymbols: number, symbol: string) {
    if (numberOfSymbols === 0) { return ''; }
    return new Array(numberOfSymbols).join(symbol);
  }
}
