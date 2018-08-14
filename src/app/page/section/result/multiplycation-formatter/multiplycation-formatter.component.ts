import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-multiplycation-formatter',
  templateUrl: './multiplycation-formatter.component.html',
  styleUrls: ['./multiplycation-formatter.component.css']
})
export class MultiplycationFormatterComponent implements OnInit {
  @Input() firstFactor: string;
  @Input() secondFactor: string;
  @Input() product: string;
  @Input() steps: string[];
  stub = '';
  stepsOut: string[];

  constructor() { }

  ngOnInit() {
    const m = (this.product.length + 1) - Math.max(this.firstFactor.length, this.secondFactor.length);
    const f = (this.product.length - this.firstFactor.length) - 1 - m;
    const s = (this.product.length - this.secondFactor.length) - 1 - m;
    this.firstFactor = this.assemblyString(f, ' ').concat(this.firstFactor);
    this.secondFactor = this.assemblyString(s, ' ').concat(this.secondFactor);
    this.stub = this.assemblyString(m, ' ');
    for (let k = 0; k < this.steps.length - 1; k++) {
      if (this.steps[k] !== '0') {
        this.stepsOut.push(this.assemblyString(k, ' ').concat(this.steps[k], this.assemblyString(
          this.product.length - (this.steps[k].length + 1), ' ')));
      }
    }
  }
  // Utility function that forms string from given char of given length
  private assemblyString(numberOfSymbols: number, symbol: string) {
    if (numberOfSymbols === 0) { return ''; }
    return new Array(numberOfSymbols).join(symbol);
  }
}
