import { Step, DivisionResult } from '../../../../_models';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-division-formatter',
  templateUrl: './division-formatter.component.html',
  styleUrls: ['./division-formatter.component.css']
})
export class DivisionFormatterComponent implements OnChanges {
  @Input() divisionResult: DivisionResult;
  dividend: string[];
  divisor: string[];
  second: string[];
  stepsOut: any[];
  result: string[];
  constructor() {}

  ngOnChanges() {
    if (this.divisionResult.isEmpty()) { return; }
    let j: number;
    let diff: number;
    let i = 0;
    // lets make a first step
    this.dividend = Array.from(this.divisionResult.dividend);
    this.divisor = Array.from(this.divisionResult.divisor);
    let firstNumber = this.divisionResult.steps[0].firstnumber;
    let secondNumber = this.divisionResult.steps[0].secondnumber;
    // define identations
    let m: number;
    let f: number;
    let s: number;
    // assembly strings to output
    this.second = Array.from(this.assemblyString(firstNumber.length - secondNumber.length, ' ')
      .concat(this.divisionResult.steps[0].secondnumber)
      .concat(this.assemblyString(this.dividend.length - firstNumber.length, ' ')));
    this.result = Array.from(this.divisionResult.quotient.concat(this.formatFraction(this.divisionResult.fraction,
      Number(this.divisionResult.divisor))));
    let difference: string = this.divisionResult.steps[0].difference;
    j = firstNumber.length;
    // define difference for the next step
    diff = Number(difference);
    this.stepsOut = new Array();
    for (let k = 1; k < this.divisionResult.steps.length; k++) {
      i++;
      if (i === this.divisionResult.steps.length) {
        firstNumber = this.removeLeadingZero(this.divisionResult.steps[k].firstnumber);
        j += firstNumber.length - String(diff).length;
        if (difference.length === 0) { j++; }
        const stepOut = {
          firstnumber: Array.from(this.assemblyString(j - firstNumber.length, ' ').concat(firstNumber)),
          secondnumber: Array.from(''),
          stub: Array.from('')
        };
        this.stepsOut.push(stepOut);
      } else {
        firstNumber = this.removeLeadingZero(this.divisionResult.steps[k].firstnumber);
        secondNumber = this.divisionResult.steps[k].secondnumber;
        difference = this.divisionResult.steps[k].difference;
        m = Math.max(firstNumber.length, secondNumber.length);
        f = m - firstNumber.length;
        s = m - secondNumber.length;
        // increase indent on count of added digits
        j += firstNumber.length - String(diff).length;
        // if the difference is 0 than omit it
        if (diff === 0) { j++; }
        // define the difference for the next step
        diff = Number(difference);
        // one step to output
        const stepOut = {
          firstnumber: Array.from(this.assemblyString(f, ' ').concat(firstNumber)),
          secondnumber: Array.from(this.assemblyString(s, ' ').concat(secondNumber)),
          stub: Array.from(this.assemblyString(j - m, ' '))
        };
        this.stepsOut.push(stepOut);
      }
    }
  }
  // Utility function for removing leading zero (if exists)
  private removeLeadingZero(str: string) {
    if (str.length > 1 && str.charAt(0) === '0') {
      str = ' ' + str.substring(1);
    }
    return str;
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
  // formatting fraction with periodic part
  private formatFraction(fraction: string, divisor: number) {
    let denominator: number;
    if (fraction.length === 0) { return ''; }
    fraction.concat(' ');
    if (divisor % 2 === 0) {
      for (let nines = 1; nines < fraction.length; nines++) {
        for (let zeros = 1; zeros + nines < fraction.length - nines; zeros++) {
          denominator = Number(this.assemblyString(nines, '9')
            .concat(this.assemblyString(zeros, '0')));
          if (denominator % divisor === 0) {
            return '.'.concat(fraction.substring(0, zeros),
              '(', fraction.substring(zeros, zeros + nines), ')');
          }
        }
      }
    } else {
      for (let nines = String(divisor).length; nines < fraction.length; nines++) {
        denominator = Number(this.assemblyString(nines, '9'));
        if (denominator % divisor === 0) {
          return '.'.concat('(', fraction.substring(0, nines), ')');
        }
      }
    }
    return '.'.concat(fraction.substring(0, fraction.length - 1));
  }
}
